import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import './MyPage.scss';
import icon_login from '../../assets/icon_login.svg';
import icon_logout from '../../assets/icon_logout.svg';
import icon_signup from '../../assets/icon_signup.svg';
import icon_deleteaccount from '../../assets/icon_delete.svg';
import mydiary from '../../assets/icon_bohoja_diary.svg';
import familydiary from '../../assets/icon_family_diary.svg';
import arrow from '../../assets/icon_go_mypage.svg';
import people from '../../assets/people.svg';
import { useLocation } from 'react-router-dom';

//화면 Main(메인화면) 컴포넌트를 만든다
const MyPage = () => {
    const location = useLocation();
    const selectedImage = location.state ? (location.state.selectedImage || people) : people;

    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();

    const handleButtonClick = (index) => {
        setSelected(index);

        // 버튼 클릭 시 페이지로 이동
        if (index === 0) {
            navigate('/familydiarypage');
        } else if (index === 1) {
            navigate('/mydiarypage');
        } else if (index === 2) {
            navigate('/login');
        } else if (index === 3) {
            navigate('/logout');
        } else if (index === 4) {
            navigate('/signup');
        } else if (index === 5) {
            navigate('/deleteaccount');
        }
    };

    return (
        <div className="iphone-frame">
            <Header />
            <div className="my-page-text-column content">
                <img src={selectedImage} alt="이미지" className="image-overlay-people" />
                <div className="my-page-text-row for-chimae-font">
                    <h2>반가워요,</h2>
                    <h2>홍길동님!</h2>
                    <h2>오늘도 건강하세요.</h2>
                </div>
                <div>
                    <div>
                        <div className="border-div"></div>
                        <button
                            className={`my-page-button ${selected === 2 ? 'selected' : ''}`}
                            onClick={() => handleButtonClick(2)}
                        >
                            <div className="mypage-row">
                                <img src={icon_login} alt="이미지" />
                                로그인
                            </div>
                        </button>

                        <div className="border-div"></div>
                        <button
                            className={`my-page-button ${selected === 3 ? 'selected' : ''}`}
                            onClick={() => handleButtonClick(3)}
                        >
                            <div className="mypage-row">
                                <img src={icon_logout} alt="이미지" />
                                로그아웃
                            </div>
                        </button>

                        <div className="border-div"></div>
                        <button
                            className={`my-page-button ${selected === 4 ? 'selected' : ''}`}
                            onClick={() => handleButtonClick(4)}
                        >
                            <div className="mypage-row">
                                <img src={icon_signup} alt="이미지" />
                                회원 가입하기
                            </div>
                        </button>

                        <div className="border-div"></div>
                        <button
                            className={`my-page-button ${selected === 5 ? 'selected' : ''}`}
                            onClick={() => handleButtonClick(5)}
                        >
                            <div className="mypage-row">
                                <img src={icon_deleteaccount} alt="이미지" />
                                회원 탈퇴하기
                            </div>
                        </button>

                        <div className="border-div"></div>
                    </div>

                    <div className="gray-div">
                        <div className="diary-div">
                            <button
                                className={`my-page-button ${selected === 0 ? 'selected' : ''}`}
                                onClick={() => handleButtonClick(0)}
                            >
                                <div className="mypage-row">
                                    <div className="just-row">
                                        <div className="row-sizedbox"></div>
                                        <img src={familydiary} alt="이미지" />
                                        <div className="row-sizedbox"></div>
                                        가족끼리 나눠 보는 일기장
                                    </div>
                                    <img src={arrow} alt="이미지" />

                                </div>
                            </button>
                        </div>
                        <div className="sizedbox"></div>
                        <div className="diary-div">
                            <button
                                className={`my-page-button ${selected === 1 ? 'selected' : ''}`}
                                onClick={() => handleButtonClick(1)}
                            >
                                <div className="mypage-row">
                                    <div className="just-row">
                                        <div className="row-sizedbox"></div>
                                        <img src={mydiary} alt="이미지" />
                                        <div className="row-sizedbox"></div>
                                        나 혼자 보는 일기장
                                    </div>
                                    <img src={arrow} alt="이미지" />

                                </div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <Nav />
        </div>
    );
};

export default MyPage;