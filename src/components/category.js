import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './category.css'

const Category = () => {
  
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:8000/categories');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  // Function to handle category click and redirect to products page
  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="container" >
      <h1 className="heading" >Categories</h1>
      <div className="grid">
        <ul>
          {categories.length > 0 ? (
            categories.map(category => (
              <li key={category.id} onClick={() => handleCategoryClick(category.category_type)} className="category-link">
              <img src={category.image_url} alt={category.category_type} className="category-image"/>
                {category.category_type}
              </li>
            ))
          ) : 
          (
            <li>No categories found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Category;
