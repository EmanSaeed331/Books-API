create table bms.book1 (
	book_id serial not null ,
	book_title varchar(50) not null,
	book_description varchar(50) , 
	book_auther varchar(50) not null , 
	book_publisher varchar(50) not null ,
	book_pages int null  ,
	store_code varchar(50) not null , 
	created_on timestamp not null , 
	created_by varchar(50) not null , 
	constraint  book_pkey primary key (book_id)
	
);