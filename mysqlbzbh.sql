SELECT
	* 
FROM
	customers 
WHERE
	cust_email IS NULL;
SELECT
	prod_id,
	prod_price,
	prod_name 
FROM
	products 
WHERE
	vend_id = 1003 
	AND prod_price <= 10;
SELECT
	prod_name,
	prod_price 
FROM
	products 
WHERE
	vend_id NOT IN ( 1002, 1003 ) 
ORDER BY
	prod_name;# 通配符
SELECT
	prod_id,
	prod_name 
FROM
	products 
WHERE
	prod_name LIKE 'jet%';
SELECT
	prod_id,
	prod_name 
FROM
	products 
WHERE
	prod_name LIKE '%anvil%';
SELECT
	prod_id,
	prod_name 
FROM
	products 
WHERE
	prod_name LIKE 's%e';# 正则
SELECT
	prod_name 
FROM
	products 
WHERE
	prod_name REGEXP '1000' 
ORDER BY
	prod_name;
SELECT
	prod_name 
FROM
	products 
WHERE
	prod_name REGEXP '[123] Ton';# 计算字段
SELECT
	concat( vend_name, '---', vend_country ) AS vend_title 
FROM
	vendors 
ORDER BY
	vend_name;# 函数
SELECT
	vend_name,
	Upper( vend_name ) AS vend_name_upcase 
FROM
	vendors 
ORDER BY
	vend_name;
SELECT
	* 
FROM
	orders 
WHERE
	Date( order_date ) = '2005-09-01';# 汇总数据
SELECT
	avg( prod_price ) AS avg_price 
FROM
	products;
SELECT
	count( prod_price ) AS count_price 
FROM
	products;# 只包含不同的值
SELECT
	avg( DISTINCT prod_price ) AS avg_price 
FROM
	products;#子查询
SELECT
	cust_name,
	cust_contact 
FROM
	customers 
WHERE
	cust_id IN (
	SELECT
		cust_id 
	FROM
		orders 
	WHERE
	order_num IN ( SELECT order_num FROM orderitems WHERE prod_id = 'TNT2' ));
SELECT
	count(*) AS orders 
FROM
	orders 
WHERE
	cust_id = 10001;
SELECT
	cust_name,
	cust_state,
	( SELECT count(*) FROM orders WHERE orders.cust_id = customers.cust_id ) AS orders 
FROM
	customers 
ORDER BY
	cust_name;# 联结
SELECT
	vend_name,
	prod_name,
	prod_price 
FROM
	vendors,
	products 
WHERE
	vendors.vend_id = products.vend_id 
ORDER BY
	vend_name,
	prod_name;
SELECT
	vend_name,
	prod_name,
	prod_price 
FROM
	vendors
	INNER JOIN products ON vendors.vend_id = products.vend_id;# 自联结
## 子查询
SELECT
	prod_id,
	prod_name 
FROM
	products 
WHERE
	vend_id = ( SELECT vend_id FROM products WHERE prod_id = 'dtntr' ) SELECT
	vend_id 
FROM
	products 
WHERE
	prod_id = 'dtntr' SELECT
	prod_id,
	prod_name 
FROM
	products 
WHERE
	vend_id = 1003 SELECT
	p1.prod_id,
	p1.prod_name 
FROM
	products AS p1,
	products AS p2 
WHERE
	p1.vend_id = p2.vend_id 
	AND p2.prod_id = 'dtntr' SELECT
	customers.cust_id,
	orders.order_num 
FROM
	customers
	INNER JOIN orders ON customers.cust_id = orders.cust_id;# 组合查询
SELECT
	vend_id,
	prod_id,
	prod_name 
FROM
	products 
WHERE
	prod_price <= 5 UNION
SELECT
	vend_id,
	prod_id,
	prod_price 
FROM
	products 
WHERE
	vend_id IN ( 1001, 1002 ) # 全文搜索
SELECT
	note_text 
FROM
	productnotes 
WHERE
	MATCH ( note_text ) Against ( 'rabbit' ) # 插入
## 自增id插入null不安全
	INSERT INTO customers
VALUES
	( NULL, '1', '1', '1', '1', '1', NULL, NULL, NULL ) ## 安全做法
	INSERT INTO customers ( cust_name, cust_address, cust_city, cust_state, cust_zip, cust_country, cust_contact, cust_email )
VALUES
	( 'pen', '100', 'los', 'ca', '90046', 'usa', NULL, NULL ) ## 插入多行
	INSERT INTO customers ( cust_name, cust_address, cust_city, cust_state, cust_zip, cust_country )
VALUES
	( 'pep', '100', 'los', 'ca', '90046', 'usa' ),
	( 'pep', '100', 'los', 'ca', '90046', 'usa' )
	
# 更新和删除数据
UPDATE customers 
SET cust_email = 'abc@cba.com' 
WHERE
	cust_id = 10005
	
UPDATE customers 
SET cust_name = 'abc', cust_email = 'sdasd@gsdgsd.com' 
WHERE
	cust_id = 10005
	
DELETE 
FROM
	customers 
WHERE
	cust_id = 10006
	
# 创建和更新表
ALTER TABLE vendors ADD vend_phone CHAR (
26)

# 视图
CREATE VIEW productcustomers AS SELECT
cust_name,
cust_contact,
prod_id 
FROM
	customers,
	orders,
	orderitems 
WHERE
	customers.cust_id = orders.cust_id 
	AND orderitems.order_num = orders.order_num
	
	
select * from productcustomers

# 存储过程
create procedure productpricing()
begin
	select avg(prod_price) as priceacerage from products;
end;

call productpricing();

drop procedure productpricing;

create procedure productpricing(
	out pl decimal(8, 2),
	out ph decimal(8, 2),
	out pa decimal(8, 2)
)
begin
	select min(prod_price)
	into pl
	from products;
	select max(prod_price)
	into ph
	from products;
	select avg(prod_price)
	into pa
	from products;
end;

call productpricing(@pricelow, @pricehign, @priceavg);
select @pricelow;