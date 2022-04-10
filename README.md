<img src="./readme/title1.svg"/>

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available.

**[PROJECT PHILOSOPHY](#philosophy) • [WIREFRAMES](#wireframes) • [TECH STACK](#stack) • [IMPLEMENTATION](#implementation) • [HOW TO RUN?](#run)**

</div>

<br><br>

<img src="/readme/title2.svg" id='philosophy'/>

> The Multivendor app is a market place where users can browse through different products and buy what they desire. The marketplace hosts many vendors/shops and it's managed by an Admin

### Admin Stories

- As an admin, I want to access my dashbaord, so that I can see my market place orders,products,sales,featured vendor
- As an admin, I want to approve/disapprove products
- As an admin, I want to aprove/disapprove vendors
- As an admin, I want to see all the customers in my app
- As a admin, I want to aprove/disapprove vendors
- As a admin, I want to choose a commission for every vendor
- As a admin, I want to aprove/disapprove orders
- As a admin, I want to make transaction for different vendors
- As a admin, I want to show/hide products reviews

### Vendor Stories

- As a Vendor, I want to access my dashbaord, so that I can see my store's orders,products,sales
- As a Vendor, I want to add new products
- As a Vendor, I want to add update existing products
- As a Vendor, I want to add delete my products
- As a Vendor, I want to check my products status
- As a Vendor, I want to see my customers
- As a Vendor, I want to see my products reviews
- As a Vendor, I want to add update my profile

### Customer Stories

- As a user, I want to browsse products,
- As a user, I want to browsse products with different categories
- As a user, I want to add product to my wishlist
- As a user, I want to remove product to my wishlist
- As a user, I want to add product to my cart
- As a user, I want to remove product to my wishlist
- As a user, I want to buy product
- As a user, I want to add a review for a product
- As a user, I want to flag a product or a vendor

<br><br>

<img src="/readme/title3.svg" id='wireframes'/>

> This design was planned before on paper, then moved to Figma app for the fine details.
> Note that i didn't use any styling library or theme, all from scratch and using pure css modules

##### Vendor APP:

<img src="/readme/figma/vendor1.png" width="400" > <img src="/readme/figma/vendor2.png" width="400">
<img src="/readme/figma/vendor3.png" width="400" > <img src="/readme/figma/vendor4.png" width="400">
<img src="/readme/figma/vendor5.png" width="400" > <img src="/readme/figma/vendor6.png" width="400">
<img src="/readme/figma/vendor7.png" width="400" > <img src="/readme/figma/vendor8.png" width="400">

##### Admin APP:

<img src="/readme/figma/admin1.png" width="400" > <img src="/readme/figma/admin2.png" width="400">
<img src="/readme/figma/admin3.png" width="400" > <img src="/readme/figma/admin4.png" width="400">
<img src="/readme/figma/admin5.png" width="400" > <img src="/readme/figma/admin6.png" width="400">
<img src="/readme/figma/admin7.png" width="400" > <img src="/readme/figma/admin8.png" width="400">

##### Customer APP:

<img src="/readme/figma/customer1.png" width="400" > <img src="/readme/figma/customer2.png" width="400">
<img src="/readme/figma/customer3.png" width="400" > <img src="/readme/figma/customer4.png" width="400">
<img src="/readme/figma/customer6.png" width="400" > <img src="/readme/figma/customer7.png" width="400">
<img src="/readme/figma/customer8.png" width="400" > <img src="/readme/figma/customer9.png" width="400">
<img src="/readme/figma/customer5.png">

<br><br>

<img src="/readme/title4.svg" id='stack'/>

Here's a brief high-level overview of the tech stack the Well app uses:

- This project uses the [Angular FrameWork](https://angular.io/). Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.
- For persistent storage (database), the app uses [Laravel](https://laravel.com/) package which allows the app to create a custom storage schema and save it to a local database.

<br><br>
<img src="/readme/title5.svg" id='implementation'/>

> Uing the above mentioned tecch stacks and the wireframes build with figma from the user sotries we have, the implementation of the app is shown as below, these are screenshots from the real app
> <img src="/readme/actual/img1.png" >

##### Vendor APP:

https://user-images.githubusercontent.com/62925891/162630108-7a296ddd-f9f3-4a07-b311-975e805a6f3f.mp4

https://user-images.githubusercontent.com/62925891/162630122-43ee7886-c3d6-426a-9d49-22c5d63643ee.mp4

<img src="/readme/actual/vendor3.png" width="400"> <img src="/readme/actual/vendor4.png" width="400">
<img src="/readme/actual/vendor5.png" width="400"> <img src="/readme/actual/vendor6.png" width="400">

##### Admin APP:

<img src="/readme/actual/admin1.png" width="400"><img src="/readme/actual/admin6.png" width="400"> 
<img src="/readme/actual/admin7.png" width="400"><img src="/readme/actual/admin8.png" width="400">
<img src="/readme/actual/admin5.png" width="400">

https://user-images.githubusercontent.com/62925891/162630142-72c462f5-cd6c-469d-bd34-ae4ea07cf3dd.mp4

https://user-images.githubusercontent.com/62925891/162630144-053f2813-c8e6-48bf-8590-8153dd599dc0.mp4



##### customer APP:

<img src="/readme/actual/customer1.png">
<img src="/readme/actual/customer6.png">
<img src="/readme/actual/customer4.png">

https://user-images.githubusercontent.com/62925891/162630158-7bbaaefb-c87f-439a-b142-2d08ee172e83.mp4

<img src="/readme/actual/customer2.png" width="400"> <img src="/readme/actual/customer3.png" width="400">
<img src="/readme/actual/customer5.png" width="400"> 



<img src="/readme/title6.svg" id='run'/>
### Prerequisites

- [Node JS](https://nodejs.org/en/download/)
- [Composer](https://getcomposer.org/download/)
- [Xampp 7.4](https://www.apachefriends.org/download.html) (once installed create a database called MultivendorDB)

- npm

```sh
npm install npm@latest -g
```

- Angular

```sh
npm install -g @angular/cli
```

- Laravel

```sh
composer global require laravel/installer
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/aminabdulkhalek/multivendor.git
   ```
2. Setup the Back-end:

   ```sh
   cd MultiVendor/MultiVendor-BackEnd
   ```

   ```sh
   composer install
   ```

   ```sh
   cp .env.example .env
   ```

   Open your .env file and change the database name (DB_DATABASE) to MultivendorDB, username (DB_USERNAME) and password (DB_PASSWORD) field correspond to your configuration.

   ```sh
   php artisan key:generate
   ```

   ```sh
   php artisan migrate
   ```

   ```sh
   php artisan storage:link
   ```

   ```sh
   php artisan serve
   ```

3. Setup the Front-End:
   ```sh
   cd MultiVendor/MultiVendor-FrontEnd
   ```
   ```sh
   npm i
   ```
   ```sh
   ng serve --open
   ```
