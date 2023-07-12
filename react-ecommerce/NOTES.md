## User 

<!-- - update user with new address in user document only
- addresses array in user document.
- initialise address array in start tempororily
- 


Now to do: addAddress feature in profile 5-24
handleAdd -> push new Address to the user.
ToDO ; we will add payment section when we work server side

Sign Out -> authAPI me bhi -> frontend se login user ki details chali jaegi -> loggedInuser = null kardo

component for logout ( to write logic of writing logout )
call logout in useEffect -> SignOutAsync method call and navigate it to login page
delay redirecting 
if(user null ) then redirect to signin

Now finally forget password ka ek page banate he
in auth component
ForgetPassword.js

5-31
Just enter one email ( just copy login component )
just make ui and clg email and set route of it.
make page of it ForgetPasswordPage -->




5-35
Now make admin panel feature

add role in createUserAsync
make ProtectedAdmin Component 
if(user.role != admin) aapko / pe bhej dega

make one feature admin
5-37


5-39
Admin pages for those two pages productListPage and productDetailPage

adminHome Page

/admin -> add routes with ProtectedAdmin

now make new account and test it 

navbar me ek link for admin aur ye sirf admin ko hi dikhega
admin true and false

edit product button in card of product list

Add new Produc tbutton on top

make ProductForm.js 
to take all products detailss

form layouts se ek form copy karke lao
adminProductformpage and itss route add

productName
description
extra information abhi use mat karo baki karte rehna

price
discount
stock

Thumbnail - for now url give of 4 images or you can upload images if you want in future

select brand option

select category option

have a none option also

now react hook form add 

now addProduct ki api chahiye

Now go in productApi of product
CreateProduct API makle
post req.

then make thunk in slice.

edit -> admin/product-form/edit/product-id

then in that page fetchproductByIde page 

then productForm me sari details load karvao

then setValue in useEffect after fetching

if(id is present in params)
Now updateProductAsyns(product)

else create new product not editing



 

6-34
pagination add to admin orders page
copy logic of previous one home page try self.

selectOrders ka ek selector
totalorders ka ek selector
just like that of products

show all orders on admin orders

