## User 

- update user with new address in user document only
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
make page of it ForgetPasswordPage

5-35
Now make admin panel feature

add role in createUserAsync
make ProtectedAdmin Component 
if(user.role != admin) aapko / pe bhej dega

make one feature admin
5-37




