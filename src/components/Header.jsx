import { useState, useContext } from 'react';
import { MealsListContext } from '../providers/mealsListProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Header.module.css';

export default function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const { searchMeals } = useContext(MealsListContext);
  
    function handleChange(e) {
      setSearchTerm(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if (searchTerm === '') return;
  
      searchMeals(searchTerm);
  
      setSearchTerm('');
    }