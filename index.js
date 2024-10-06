// npx sequelize-cli init

// Tạo database
// npx sequelize-cli model:generate --name User --attributes email:string,password:string,name:string,role:integer,avatar:string,phone:integer,created_at:date,updated_at:date
// npx sequelize-cli model:generate --name Catagory --attributes name:string,image:text
// npx sequelize-cli model:generate --name Brand --attributes name:string,image:text
// npx sequelize-cli model:generate --name News --attributes title:string,image:text,content:text
// npx sequelize-cli model:generate --name Banner --attributes name:string,image:text,status:integer
// npx sequelize-cli model:generate --name Order --attributes user_id:integer,status:integer,note:text,total:integer
// npx sequelize-cli model:generate --name Product --attributes name:string,price:integer,oldprice:integer,image:text,description:text,specification:text,buyturn:integer,quantity:integer,brand_id:integer,category_id:integer
// npx sequelize-cli model:generate --name OrderDetail --attributes order_id:integer,product_id:integer,price:integer,quantity:integer
// npx sequelize-cli model:generate --name BannerDetail --attributes product_id:integer,banner_id:integer
// npx sequelize-cli model:generate --name Feedback --attributes product_id:integer,user_id:integer,star:integer,content:text
// npx sequelize-cli model:generate --name NewsDetail --attributes product_id:integer,news_id:integer

// Cập nhật database
// npx sequelize-cli db:migrate

// Không ưng ý, cần sửa
// npx sequelize-cli db:migrate:undo
// Hoặc sử dụng
// npx sequelize-cli db:migrate:undo:all

// Truy vấn Mysql
// Select * from information_schema.table_constraints where table_schema = 'shopapp' and table_name = 'orders'

console.log("This is my shopapp");