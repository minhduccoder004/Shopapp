// npx sequelize-cli init
// Tạo database
// npx sequelize-cli model:generate --name User --attributes email:string,password:string,name:string,role:integer,avatar:string,phone:integer,created_at:date,updated_at:date
// npx sequelize-cli model:generate --name Catagory --attributes name:string,image:text
// npx sequelize-cli model:generate --name Brand --attributes name:string,image:text
// npx sequelize-cli model:generate --name News --attributes title:string,image:text,content:text
// npx sequelize-cli model:generate --name Banner --attributes name:string,image:text,status:integer
// Cập nhật database
// npx sequelize-cli db:migrate
// Không ưng ý, cần sửa
// npx sequelize-cli db:migrate:undo
// Hoặc sử dụng
// npx sequelize-cli db:migrate:undo:all

console.log("This is my shopapp");