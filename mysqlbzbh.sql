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
	INNER JOIN products ON vendors.vend_id = products.vend_id;
# 自联结
## 子查询
select prod_id, prod_name from products where vend_id = (select vend_id from products where prod_id = 'dtntr')

select vend_id from products where prod_id = 'dtntr'
select prod_id, prod_name from products where vend_id = 1003

select p1.prod_id, p1.prod_name from products as p1, products as p2 where p1.vend_id = p2.vend_id and p2.prod_id = 'dtntr'

select customers.cust_id, orders.order_num from customers inner join orders on customers.cust_id = orders.cust_id;

# 组合查询
select vend_id, prod_id, prod_name from products where prod_price <= 5 union select vend_id, prod_id, prod_price from products where vend_id in (1001, 1002)

# 全文搜索
select note_text from productnotes where MAtch(note_text) Against('rabbit')

# 插入
## 自增id插入null不安全
insert into customers values(null, '1','1','1','1','1',null, null,null)
## 安全做法
insert into customers(cust_name, cust_address, cust_city, cust_state, cust_zip, cust_country, cust_contact, cust_email) values('pen', '100', 'los', 'ca', '90046', 'usa', null, null)

## 插入多行
insert into customers(cust_name,
cust_address,
	cust_city,
	cust_state,
	cust_zip,
	cust_country
) values (
	'pep',
	'100',
	'los',
	'ca',
	'90046',
	'usa'
), (
	'pep',
	'100',
	'los',
	'ca',
	'90046',
	'usa'
)

