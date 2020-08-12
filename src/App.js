import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Header from './components/inc/Header';
import Contents from './components/Contents';
import GlobalStyles from './components/GlobalStyles';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  
  const [staylist, setStaylist] = useState([
    {
      id: 1,
      image: 'https://myrealtrip-upload-us.s3.amazonaws.com/share/thumbnail/thumbnail-9.jpg',
      local: '한인민박 / 베네치아',
      name: '베네치아 게스트하우스',
      rating: 4,
      review: 314,
      price: 42300,
      wish: true,
      days: '1박'
    },
    {
      id: 2,
      image: 'https://myrealtrip-upload-us.s3.amazonaws.com/share/thumbnail/thumbnail-16.jpg',
      local: '한인민박 / 폴란드',
      name: '[한인민박] 폴란드 모리하우스',
      rating: 5,
      review: 1187,
      price: 94000,
      wish: true,
      days: '1박'
    },
    {
      id: 3,
      image: 'https://myrealtrip-upload-us.s3.amazonaws.com/share/thumbnail/thumbnail-4.jpg',
      local: '외국민박 / 캄보디아',
      name: '아파트먼트 (집 전체)',
      rating: 4,
      review: 28,
      price: 123000,
      wish: false,
      days: '1박'
    },
    {
      id: 4,
      image: 'https://myrealtrip-upload-us.s3.amazonaws.com/share/thumbnail/thumbnail-5.jpg',
      local: '한인민박 / 이탈리아',
      name: '이탈리아 데이즈 아파트먼트',
      rating: 4,
      review: 974,
      price: 69000,
      wish: false,
      days: '1박'
    },
    {
      id: 5,
      image: 'https://myrealtrip-upload-us.s3.amazonaws.com/share/thumbnail/thumbnail-6.jpg',
      local: '한인민박 / 프라하',
      name: '프라하 게스트하우스',
      rating: 4,
      review: 784,
      price: 72000,
      wish: false,
      days: '1박'
    },
    {
      id: 6,
      image: 'https://myrealtrip-upload-us.s3.amazonaws.com/share/thumbnail/thumbnail-7.jpg',
      local: '한인민박 / 헝가리',
      name: '부다페스트 근처 아파트먼트',
      rating: 4,
      review: 288,
      price: 32500,
      wish: false,
      days: '1박'
    },
    {
      id: 7,
      image: 'https://myrealtrip-upload-us.s3.amazonaws.com/share/thumbnail/thumbnail-8.jpg',
      local: '한인민박 / 해운대',
      name: '해운대 5분거리 민박',
      rating: 4,
      review: 146,
      price: 48000,
      wish: true,
      days: '1박'
    },
  ]);

  const setStayObj = useCallback((changValue) => {
    alert('1');
    setStaylist([]);

    if (changValue === '높은가격순') {
      staylist.sort((a, b) => {
        return b.price - a.price
      })

      console.log('높은가격순 : ');
      console.log(staylist);
      
      setStaylist(staylist);
      // setStaylist(staylist);

    } else {
      staylist.sort((a, b) => {
        return a.price - b.price
      })

      console.log('낮은가격순 : ');
      console.log(staylist);
      
      setStaylist(staylist);
    }
  }, [staylist]);

  useEffect (() => {
    console.log('staylist 업데이트 : ');
    console.log(staylist);
  }, [staylist])

  return (
    <Router>
    <div className="App">
      <GlobalStyles />
        <Header setStayObj={setStayObj} />
      <Contents staylist={staylist}/>
    </div>
    </Router>
  );
}

export default App;
