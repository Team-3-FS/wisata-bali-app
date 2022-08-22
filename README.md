# wisata-bali-apps

# yoga,zaki,danang

```bash
# category
npx sequelize-cli model:generate --name category --attributes nama:string

# user
npx sequelize-cli model:generate --name user --attributes nama:string,email:string,pass:string,level:string,image:string

# Wisata
npx sequelize-cli model:generate --name wisata --attributes nama:string,alamat:string,deskripsi:text,rating:float,categoryId:integer

# Image
npx sequelize-cli model:generate --name image --attributes wisataId:integer,image:string

# Komen Rating
npx sequelize-cli model:generate --name komenRatig --attributes wisataId:integer,userId:integer,rating:float,kometar:string
```
