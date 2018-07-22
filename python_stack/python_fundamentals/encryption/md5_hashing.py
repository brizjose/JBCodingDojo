import md5      #imports md5 module to generate a hash

#make up a password:

password = 'password'   

#encrypt the password provided as a 32 character string:

hashed_password = md5.new(password).hexdigest()

#for demonstration purposes, print the hashed passord:

print hashed_password

# has is the same all the time, thus making it viable to check passwords upon log-in.



