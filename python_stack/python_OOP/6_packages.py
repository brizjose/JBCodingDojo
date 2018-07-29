import math
dir(math)

#a module is a single file

#file name: arithmetic.py

        # def add(x, y):
        #     return x + y
        # def multiply(x, y):
        #     return x * y
        # def subtract(x, y):
        #      return x - y

#we can import the arithmentic module:

        # import arithmetic
        # print arithmetic.add(5, 8)
        # print arithmetic.subtract(10, 5)
        # print arithmetic.multiply(12, 6)


#a package is a collection of modules, or a directory of multiple packages and modules

        # from my_package.subdirectory import my_functions

        # sample_project
        #      |_____ python_file.py
        #      |_____ my_modules
        #                |_____ __init__.py
        #                |_____ test_module.py
        #                |_____ another_module.py
        #                |_____ third_module.py


# the __init__.py file MUST be part of the package; it can be empty.  But has to be there because it indicates that the directory containing it is a Python package, so it can be imported the way a module is imported.

# to import, for example, the test_module, we write:

        # from my_modules import test_module

        # or 

        # import my_modules.test_module

# the __init__.py file also decides which modules this package will export as an API, while keeping the others internal.  This is achieved by overriding the __all__ variable like so:

        # __init__.py:
        # __all__ = ["test_module"]