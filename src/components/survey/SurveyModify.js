import React from "react";

function SurveyModify(){
    return(
        <div class="modify-box">
            <form class="form">
                <dl class="dl_1">
                    <dt><span>조사명</span></dt>
                    <dd>
                        <label></label>
                        <input type="text" placeholder="비대면 시장조사 필요성 인식 조사" name="" id="" />
                    </dd> 
                </dl>
                <dl class="dl_2">
                    <dt><span>설문링크</span></dt>
                    <dd>
                        <input type="text" placeholder="www.google.com" name="" id="" />
                        <a href="#" class="shortcut">설문지 바로가기</a>
                    </dd>
                </dl>
                <dl class="dl_4">
                    <dt><span>발송패널 수</span></dt>
                    <dd>
                        <div class="fileupload-area">
                            <a href="#" class="fileupload-btn">파일 등록</a>
                        </div>
                        <p>12,500건</p>
                    </dd>
                </dl>
                <dl class="dl_5">
                    <dt><span>조사기간</span></dt>
                    <dd class="datearea">
                        <input type="date" data-placeholder="" required aria-required="ture"/> 
                        <span>~</span>
                        <input type="date" data-placeholder="" required aria-required="ture"/>
                    </dd>
                </dl>
                <dl class="dl_6">
                    <dt class="survey-profile">설문프로파일</dt>
                    <dd>
                        <ul>
                            <li class="steparea">
                                <dt>1단계</dt>
                                <dd>
                                    <section class="selectarea">
                                        <select name="성별" required class="select-box">
                                            <option value="" disabled selected>성별</option>
                                            <option value="man">남자</option>
                                            <option value="woman">여자</option>
                                        </select>
                                        <select name="나이" required class="select-box">
                                            <option value="" disabled selected>나이</option>
                                            <option value="">0 ~ 19세</option>
                                            <option value="">20세 ~ 39세</option>
                                            <option value="">40세 ~ 59세</option>
                                            <option value="">60세 ~ </option>
                                        </select>
                                    </section>
                                    <section class="scrollbar">
                                        <button class="tag">남성<i class="fa fa-times tag_x"></i></button>
                                        <button class="tag">20세~39세<i class="fa fa-times tag_x"></i></button>
                                    </section>
                                </dd>
                            </li>
                            <li class="steparea">
                                <dt>2단계</dt>
                                <dd>
                                    <section class="selectarea">
                                        <select name="통신사" class="select-box">
                                            <option value="">통신사</option>
                                        </select>
                                        <select name="통신사선택" required class="select-box">
                                            <option value="SKT" selected>SKT</option>
                                            <option value="KT">KT</option>
                                            <option value="U+">U+</option>
                                            <option value="알뜰폰">알뜰폰</option>
                                        </select>
                                    </section>
                                    <section class="scrollbar">
                                        <button class="tag">SKT<i class="fa fa-times tag_x"></i></button>
                                    </section>
                                </dd>
                            </li>
                            <li class="steparea">
                                <dt>3단계</dt>
                                <dd>
                                    <section class="selectarea">
                                        <select name="전자기기" class="select-box">
                                            <option>전자기기</option>
                                        </select>
                                        <select name="휴대폰기종" class="select-box">
                                            <option>휴대폰기종</option>
                                        </select>
                                        <select name="기종선택" required class="select-box">
                                            <option value="" selected>갤럭시S1</option>
                                            <option value="">갤럭시S20</option>
                                            <option value="">갤럭시노트20</option>
                                            <option value="">아이폰13</option>
                                        </select>
                                    </section>
                                    <section class="scrollbar">
                                        <button class="tag">갤럭시S1<i class="fa fa-times tag_x"></i></button>
                                    </section>
                                </dd>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </form>
            <section class="btn-area">
                <button class="save-btn">저장</button>
                <button class="cancel-btn">취소</button>
            </section>
        </div>
    )
}

export default SurveyModify;