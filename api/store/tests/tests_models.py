from django.contrib.auth.models import User
from django.test import TestCase

from store.models import Category, Product


class TestCategoryModel(TestCase):
    
    def setUp(self):
        self.data1 = Category.objects.create(name = 'django', slug = 'django')


    def test_category_model_entry(self):
        '''
        Test Category model data inseration/types/field atributes
        '''
        data = self.data1
        self.assertTrue(isinstance(data, Category))


    def test_category_model_entry_second(self):
        '''
        Test Category model defaul name
        '''
        data = self.data1
        self.assertEqual(str(data), 'django')


class TestProductModel(TestCase):
    def setUp(self):
        Category.objects.create(name = 'django', slug = 'django')
        User.objects.create(username='admin')
        self.data1 = Product.objects.create(category_id=1, title='some title', created_by_id=1,
                                            slug='some-slug', price='2000', image='try')


    def TestProductModelNew(self):
        '''
                Test Category model data inseration/types/field atributes

        '''
        data = self.data1
        self.assertTrue(isinstance(data, Product))
        self.assertEqual(str(data), 'django aplication')
