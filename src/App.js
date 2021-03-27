import './App.css';
import {FaHome, FaCloudMoon, FaBrain, FaMusic, FaMountain, FaUserCircle } from 'react-icons/fa';

function App() {

  return (
    <div className="App">
      <div className="body">
 
        <div className="nav">
        <div className="nav_logo">
            <div className="logo"><a href="" >Calm</a></div>
            <div className="free"><a href="" >Calm 무료 체험</a></div>     
            <input type="checkbox" id="menuicon"/>
            <label htmlFor="menuicon">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div> {/*nav logo */}

        <div className="nav_menu">
              <li><a href=""><FaHome/> 홈</a></li> <br/><br/>
              <li><a href=""><FaCloudMoon/> 수면</a></li> <br/><br/>
              <li><a href=""><FaBrain/> 명상</a></li> <br/><br/>
              <li><a href=""><FaMusic style={{fontSize:'7px'}}/>음악</a></li> <br/><br/>
              <li><a href=""><FaMountain style={{fontSize:'26px'}}/>배경장면</a></li> <br/><br/>
              <li><a href=""><FaUserCircle style={{fontSize:'34px'}}/>프로필</a></li> <br/><br/>
              <li><a href="https://www.calm.com/?coupon=freetrial">calm.com으로 이동</a></li> 
        </div> {/*nav menu */}
    </div> {/*nav*/}
       
    <div className="main">

        
        <div className="login">
            <a href="">
                로그인
            </a>
        </div> 
        
    
        <span className="combo">명상
            <select name="전체" id="all">
                <option value="">전체</option>
                <option value="">나의♥</option>
                <option value="">수면</option>
                <option value="">불안</option>
                <option value="">초보자</option>
                <option value="">스트레스</option>
                <option value="">일</option>
                <option value="">자기돌봄</option>
                <option value="">내면의 평화</option>
                <option value="">집중</option>
                <option value="">감정</option>
                <option value="">자유명상</option>
                <option value="">관계</option>
                <option value="">자기성장</option>
                <option value="">키즈</option>
                <option value="">특별 게스트 콘텐츠</option>
            </select>
        </span>
    
  
        <a href="" className="daily"> 
            <p class="daily_image"></p>
            <p>Daily calm<br/>12월 9일 - 경이로운 순간</p>
        </a>
    
    
    <div className="items">
        <a href=""><div className="item1">
            <p class="title1">7일간의 Calm</p>
        </div></a>
        <a href=""><div className="item2">
            <p className="title2">숙면을 위한 이완 명상</p>
        </div></a>
        <a href=""><div className="item3">
            <p className="title3">숙면 휴식</p>
        </div></a>
        <a href=""><div className="item4">
            <p className="title4">직장에서의 마음 챙김</p>
        </div></a>
        <a href=""><div className="item5">
            <p className="title5">90초 명상</p>
        </div></a>
        <a href=""><div className="item6">
            <p className="title6">어린이를 위한 마음 챙김</p>
        </div></a>
        <a href=""><div className="item7">
            <p className="title7">시간지정 명상</p>
        </div></a>
        <a href=""><div className="item8">
            <p className="title8">열린 명상</p>
        </div></a>
        <a href=""><div className="item9">
            <p className="title9">Daily Calm 하이라이트</p>
        </div></a>
        <a href=""><div className="item10">
            <p className="title10">지금 이순간에 집중하기</p>
        </div></a>
    </div>{/*items*/}
    </div>   {/*main*/} 
  </div>{/*body*/}
</div>
  );
}

export default App;
