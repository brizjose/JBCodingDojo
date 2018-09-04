import unittest


# this is used when you want to assert the truth of falsity of a solution that is passed through unittest:

class TruthTest(unittest.TestCase):
    def test_assert_true(self):
        my_value = 5
        self.assertTrue(my_value)
    def test_assert_false(self):
        my_value = 5
        self.assertFalse(my_value)
if __name__ == "__main__":
    unittest.main()

my_value=5