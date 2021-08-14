select * from customers where cust_email is null;

select prod_id, prod_price, prod_name from products where vend_id = 1003 and prod_price <= 10;

select prod_name, prod_price from products where vend_id not in (1002, 1003) order by prod_name;

# 通配符
select prod_id, prod_name from products where prod_name like 'jet%';
select prod_id, prod_name from products where prod_name like '%anvil%';
select prod_id, prod_name from products where prod_name like 's%e';


# 正则
select prod_name from products where prod_name regexp '1000' order by prod_name;

select prod_name from products where prod_name regexp '[123] Ton' ;


# 计算字段
select concat(vend_name, '---', vend_country) as vend_title from vendors order by vend_name;


# 函数
select vend_name, Upper(vend_name) as vend_name_upcase from vendors order by vend_name;
select * from orders where Date(order_date) = '2005-09-01';


# 汇总数据
select avg(prod_price) as avg_price from products;
select count(prod_price) as count_price from products;
# 只包含不同的值
select avg(distinct prod_price) as avg_price from products;

#子查询
select cust_name, cust_contact from customers where cust_id in (select cust_id from orders where order_num in (select order_num from orderitems where prod_id = 'TNT2'));

select count(*) as orders from orders where cust_id = 10001;
select cust_name, cust_state, (select count(*) from orders where orders.cust_id = customers.cust_id) as orders from customers order by cust_name;


# 联结
select vend_name, prod_name, prod_price from vendors, products where vendors.vend_id = products.vend_id order by vend_name, prod_name;
select vend_name, prod_name, prod_price from vendors inner join products on vendors.vend_id = products.vend_id;