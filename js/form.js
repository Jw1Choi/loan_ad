const form = document.getElementById('form');
form.innerHTML = `
<div class="form-box" id="fm-box" style="padding-top:50px;">
<div class="inner" style="text-align:-webkit-center;">
<div style="text-align:-webkit-center;border:1.5px solid #000;width:95%;padding:10px 20px 15px;max-width:450px;" > 
<a href="" class="scroll box" style="border-color:#000;text-align:-webkit-center;">
                    
    <span class="timer" style="color:#000;font-size:14px;font-weight:600;">
        신청 마감 | <span id="day1" style="font-weight:600;"></span> ( <span id="countdown1" style="font-weight:600;"></span>)
    </span>
</a></div><br><br>
    <h1 class="form-top-title" style="line-height:200%;text-indent:0px;">안심하세요<br>구매할 의무는 없습니다.<br>모든 선택은 여러분의 몫입니다.<br><span class="blink"></span><br><span style=font-size:20px;>[ 현재 남은 인원 <span class="blink counter" style="color:red;"> 8</span> 명 ]</span></h1>
    <div class="form-box-inner">
        <form action="" id="form_e11" method="POST" target="hidden_iframe11" onsubmit="dll(); submitted=true;">
        <input type="hidden" name="entry.925560115" value="" >
            <div class="form-box-tb-out">
            <br>
                <table class="form-box-tb">
                    <tbody>
                       
                    <tr>
                        <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->이름</th>
                        <td>
                            <input type='text' name='entry.286048134' id='name' class="form-control" placeholder="성함" maxlength="4">
                        </td>
                    </tr>
                    <tr>
                        <th><!--<i class="fa fa-phone" aria-hidden="true"></i>-->연락처</th>
                        <td>
                            <input type='text' name='entry.440436541' id='phone' class="form-control" placeholder="휴대폰번호" maxlength="11">
                        </td>
                    </tr>

                    <tr id="select_lic">
                    <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->담보 여부<br></th>
                    <td>

                        <select name='entry.302176945' id='license' class="form-control" placeholder="현재 조건">

                            <option value="딤보 여부" selected disabled>담보 여부</option>
                                <option value="유">유</option>
                                <option value="무">무</option>
                               
                              
                        </select>

                        <!--한번에 여러개 신청하는 기능-->
                        <!-- <input type='checkbox' name='lic' class="chk_lic" id='license1'  value="손해평가사" style="display:none;"> <label for="license1"> 손해평가사 </label>
                        <input type='checkbox' name='lic' class="chk_lic" id='license2'  value="도로교통사고감정사" style="display:none;"> <label for="license2" > 도로교통사고감정사</label>
                        <input type='checkbox' name='lic' class="chk_lic" id='license3'  value="농산물품질관리사" style="display:none;"> <label for="license3" > 농산물품질관리사</label>
                        <input type='checkbox' name='lic' class="chk_lic" id='license4'  value="반려견스타일리스트" style="display:none;"> <label for="license4" > 반려견스타일리스트</label>
                        <input type='checkbox' name='lic' class="chk_lic" id='license5'  value="화장품조제관리사" style="display:none;"> <label for="license5"> 화장품조제관리사</label>
                        <input type="text" name='entry.302176945' id="selected_licenses" readonly style="display:none;">
                        <script>
                        const checkboxes = document.querySelectorAll('.chk_lic');
                        const selectedLicenses = document.getElementById('selected_licenses');
                            
                            checkboxes.forEach(function(checkbox) {
                              checkbox.addEventListener('click', function() {
                                const selectedValues = [];
                                checkboxes.forEach(function(checkbox) {
                                  if (checkbox.checked) {
                                    selectedValues.push(checkbox.value);
                                  }
                                });
                                selectedLicenses.value = selectedValues.join(', ');
                              });
                            });</script> -->
                            <!--한번에 여러개 신청하는 기능 끝-->
                    </td>
                </tr>

                   <!-- <tr>
                        <th>나이</th>
                        <td>
                            <input type='text' name='entry.1336420307' id='id-number' class="form-control" placeholder="나이" maxlength="2">
                           
                        </td>
                    </tr> -->
                     <tr>
                        <th>통화가능시간</th>
                        <td>
                            <select name="entry.882151947" id='position' class="form-control" placeholder="현재 조건">

                                <option value="통화가능시간" selected disabled>통화가능시간
                                    <option value="언제나 통화 가능">언제나 통화 가능</option>
                                    <option value="오전 09:00~10:00">오전 09:00 ~ 10:00</option>
                                    <option value="오전 10:00~11:00">오전 10:00 ~ 11:00</option>
                                    <option value="오전 11:00~12:00">오전 11:00 ~ 12:00</option>
                                    <option value="점심 12:00~01:00">점심 12:00 ~ 01:00</option>
                                    <option value="오후 01:00~02:00">오후 01:00 ~ 02:00</option>
                                    <option value="오후 02:00~03:00">오후 02:00 ~ 03:00</option>
                                    <option value="오후 03:00~04:00">오후 03:00 ~ 04:00</option>
                                    <option value="오후 04:00~05:00">오후 04:00 ~ 05:00</option>
                                    <option value="오후 05:00~06:00">오후 05:00 ~ 06:00</option>
                                    <option value="오후 06:00~07:00">오후 06:00 ~ 07:00</option>
                            </select>
                        </td>
                    </tr>
                   
                    <tr>
                        <th>문의사항</th>
                        <td>
                            <textarea name='entry.2051055902' id='message' class="form-control" placeholder="문의사항을 적어주세요. (선택)" style="min-height:100px"></textarea>
                        </td>
                    </tr>

                 <!--  <tr>
                    <th>이메일</th>
                    <td>
                        <span>* 맞춤 무료 자격증 정보를 전달드립니다.</span>
                        <br><input type="text" name='entry.1667605872' id='email' class="form-control" placeholder="이메일 주소 (선택)" >
                    </td>
                </tr> --> 
                    <!-- <tr>
                        <th>대출금액</th>
                        <td>
                        <input name='M_items_value_16' type='text' value='' class='ri_16 text_box' placeholder="필요금액을 입력하세요." pattern="\d*"><span class="text_box_text">&nbsp;만원</span>
                        </td>
                    </tr> -->
                    <!-- <tr>
                        <th>!--<i class="fa fa-user" aria-hidden="true"></i>--메모</th>
                        <td>
                            <textarea name="M_data" type="text" class="form-info" placeholder="개인 신용에 어떠한 영향도 끼치지 않으며, 한도안내 후 개인정보는 전부 파기됩니다." onkeyup="cdcheck(this)" onkeydown="cdcheck(this)"></textarea>
                        </td> 
                    </tr>   -->
                    <tr>
                        <td colspan="2" style="border-bottom: none"> 
                            <!-- <span class="red-txt">신용 8~10등급은 접수 불가합니다.</span> -->
                        
                            <input class="submit-btn" type='submit' id='send_message' value='혜택 지원 신청하기' disabled style="background:#595959">
                            <div class="form-agree-box">
                                <p class="form-info-agree">
                                    <span>
                                       
                                        <input type="checkbox" name="agree11" id="agree11" value="개인정보보호정책 동의" checked>
                                        <label style="color:black; font-weight:300;font-size:13px;margin-top:-3px;" for="agree11">개인정보보호정책</label>
                    
                    
                                        <span class="privacyBtn" style="color:black;font-weight:400; font-size: 13px;margin-top:-3px; " onclick="privacyPopUp()">
                                            [자세히 보기]
                                        </span>
                                    </span>
                                </p>

                                <script type="text/javascript">var submitted = false;</script>

                                <iframe name="hidden_iframe11" id="hidden_iframe11" style="display:none;" onload=""></iframe>
                                <iframe name="hidden_iframe12" id="hidden_iframe12" style="display:none;" onload=""></iframe>
                               
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </form>
    </div>
</div>
</div><!----form-end------>

<div style="display:none;">
<form accept-charset="euc-kr"  checkform action="https://marketclub.cafe24.com/pr_test2.php" method="post" name="" onsubmit="document.charset='euc-kr';" target="hidden_iframe12" id="form1">
    <input type="hidden" name="partner_id" value="flosmarketing">
    <INPUT type=hidden name=item_no value="444">
    <input type="hidden" name="refe" value=" ">
    <input type="hidden" name="mcheck" value=" ">
    <input type="hidden" name="ru" value=""><!-- 마케터수동입력 -->
    
                <div class="cms-item-row">
                    <div class="cms-width-48pro">
                        <input type="text" name="user_name" maxlength="5" required="required" placeholder="이름" class="cms-input-text cms-input-color0">
                    </div>
                    <div class="cms-width-4pro">&nbsp;</div>
                    <div class="cms-width-48pro">
                        <input type="text" name="나이" maxlength="2" required="required" placeholder="나이" class="cms-input-text cms-input-color0">
                    </div>
                    <div class="cms-clear-both"></div>
              </div>
    
                <div class="cms-item-row cms-margin-top-10">
                    <div class="cms-width-30pro">
              <select name="휴대폰번호1" required="required" placeholder="연락처" class="cms-input-text cms-input-color0">
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
                <option value="019">019</option>
              </select>
            </div>
                    <div class="cms-width-5pro">-</div>
                    <div class="cms-width-30pro">
                        <input type="tel" name="휴대폰번호2" maxlength="4" required="required" placeholder="연락처" class="cms-input-text cms-input-color0">
                    </div>
                    <div class="cms-width-5pro">-</div>
                    <div class="cms-width-30pro">
                        <input type="tel" name="휴대폰번호3" maxlength="4" required="required" placeholder="연락처" class="cms-input-text cms-input-color0">
                    </div>
                    <div class="cms-clear-both"></div>
              </div>
    
                <div class="cms-item-row cms-margin-top-10">
            <select name="통화가능시간" required="required" class="cms-input-text cms-input-color0">
              <option value="">통화가능시간 선택</option>
              <option value="언제나 통화 가능">언제나 통화 가능</option>
              <option value="오전 09:00~10:00">오전 09:00 ~ 10:00</option>
              <option value="오전 10:00~11:00">오전 10:00 ~ 11:00</option>
              <option value="오전 11:00~12:00">오전 11:00 ~ 12:00</option>
              <option value="점심 12:00~01:00">점심 12:00 ~ 01:00</option>
              <option value="오후 01:00~02:00">오후 01:00 ~ 02:00</option>
              <option value="오후 02:00~03:00">오후 02:00 ~ 03:00</option>
              <option value="오후 03:00~04:00">오후 03:00 ~ 04:00</option>
              <option value="오후 04:00~05:00">오후 04:00 ~ 05:00</option>
              <option value="오후 05:00~06:00">오후 05:00 ~ 06:00</option>
              <option value="오후 06:00~07:00">오후 06:00 ~ 07:00</option>
            </select>
                </div>
        
                <div class="cms-item-row cms-margin-top-10">
                    <input type="text" name="문의사항" maxlength="100" placeholder="문의사항" class="cms-input-text cms-input-color0">
                </div>
    
        
          <div class="cms-item-row cms-margin-top-10">
            <ul>
              <li class="cms-radio-li cms-radio-color0">
                <input type="checkbox" required="required" id="" checked><label for=""> 개인정보 수집·이용 동의</label>
                <a href="/01.html" target="_blank" class="Color-Box">[보기]</a>
              </li>
            </ul>
                    <div class="cms-clear-both"></div>
          </div>
    
          <div class="cms-button cms-btn-color0 cms-margin-top-10">
                                <button ><span ><b>무료상담신청하기</b></span></button>
                </div>
    
                <input type=hidden name="refe" value="/insert_form0.php?it=444&pt=flosmarketing"> 
                <input type=hidden name="refer_url" value="">
    
        </form>




        <form accept-charset="euc-kr"  checkform action="https://marketclub.cafe24.com/pr_test2.php" method="post" name="" onsubmit="document.charset='euc-kr';" target="hidden_iframe12" id="form2">
            <input type="hidden" name="partner_id" value="flosmarketing">
            <INPUT type=hidden name=item_no value="391">
            <input type="hidden" name="refe" value=" ">
            <input type="hidden" name="mcheck" value=" ">
            <input type="hidden" name="ru" value=""><!-- 마케터수동입력 -->
            
                        <div class="cms-item-row">
                            <div class="cms-width-48pro">
                                <input type="text" name="user_name" maxlength="5" required="required" placeholder="이름" class="cms-input-text cms-input-color0">
                            </div>
                            <div class="cms-width-4pro">&nbsp;</div>
                            <div class="cms-width-48pro">
                                <input type="text" name="나이" maxlength="2" required="required" placeholder="나이" class="cms-input-text cms-input-color0">
                            </div>
                            <div class="cms-clear-both"></div>
                      </div>
            
                        <div class="cms-item-row cms-margin-top-10">
                            <div class="cms-width-30pro">
                      <select name="휴대폰번호1" required="required" placeholder="연락처" class="cms-input-text cms-input-color0">
                        <option value="010">010</option>
                        <option value="011">011</option>
                        <option value="016">016</option>
                        <option value="017">017</option>
                        <option value="018">018</option>
                        <option value="019">019</option>
                      </select>
                    </div>
                            <div class="cms-width-5pro">-</div>
                            <div class="cms-width-30pro">
                                <input type="tel" name="휴대폰번호2" maxlength="4" required="required" placeholder="연락처" class="cms-input-text cms-input-color0">
                            </div>
                            <div class="cms-width-5pro">-</div>
                            <div class="cms-width-30pro">
                                <input type="tel" name="휴대폰번호3" maxlength="4" required="required" placeholder="연락처" class="cms-input-text cms-input-color0">
                            </div>
                            <div class="cms-clear-both"></div>
                      </div>
            
                        <div class="cms-item-row cms-margin-top-10">
                    <select name="통화가능시간" required="required" class="cms-input-text cms-input-color0">
                      <option value="">통화가능시간 선택</option>
                      <option value="언제나 통화 가능">언제나 통화 가능</option>
                      <option value="오전 09:00~10:00">오전 09:00 ~ 10:00</option>
                      <option value="오전 10:00~11:00">오전 10:00 ~ 11:00</option>
                      <option value="오전 11:00~12:00">오전 11:00 ~ 12:00</option>
                      <option value="점심 12:00~01:00">점심 12:00 ~ 01:00</option>
                      <option value="오후 01:00~02:00">오후 01:00 ~ 02:00</option>
                      <option value="오후 02:00~03:00">오후 02:00 ~ 03:00</option>
                      <option value="오후 03:00~04:00">오후 03:00 ~ 04:00</option>
                      <option value="오후 04:00~05:00">오후 04:00 ~ 05:00</option>
                      <option value="오후 05:00~06:00">오후 05:00 ~ 06:00</option>
                      <option value="오후 06:00~07:00">오후 06:00 ~ 07:00</option>
                    </select>
                        </div>
                
                        <div class="cms-item-row cms-margin-top-10">
                            <input type="text" name="문의사항" maxlength="100" placeholder="문의사항" class="cms-input-text cms-input-color0">
                        </div>
            
                
                  <div class="cms-item-row cms-margin-top-10">
                    <ul>
                      <li class="cms-radio-li cms-radio-color0">
                        <input type="checkbox" required="required" id="" checked><label for=""> 개인정보 수집·이용 동의</label>
                        <a href="/01.html" target="_blank" class="Color-Box">[보기]</a>
                      </li>
                    </ul>
                            <div class="cms-clear-both"></div>
                  </div>
            
                  <div class="cms-button cms-btn-color0 cms-margin-top-10">
                                        <button ><span ><b>무료상담신청하기</b></span></button>
                        </div>
            
                        <input type=hidden name="refe" value="/insert_form0.php?it=391&pt=flosmarketing"> 
                        <input type=hidden name="refer_url" value="">
            
                </form>



                <form accept-charset="euc-kr"  checkform action="https://marketclub.cafe24.com/pr_test2.php" method="post" name="" onsubmit="document.charset='euc-kr';" target="hidden_iframe12" id="form3">
                    <input type="hidden" name="partner_id" value="flosmarketing">
                    <INPUT type=hidden name=item_no value="390">
                    <input type="hidden" name="refe" value=" ">
                    <input type="hidden" name="mcheck" value=" ">
                    <input type="hidden" name="ru" value=""><!-- 마케터수동입력 -->
                    
                                <div class="cms-item-row">
                                    <div class="cms-width-48pro">
                                        <input type="text" name="user_name" maxlength="5" required="required" placeholder="이름" class="cms-input-text cms-input-color0">
                                    </div>
                                    <div class="cms-width-4pro">&nbsp;</div>
                                    <div class="cms-width-48pro">
                                        <input type="text" name="나이" maxlength="2" required="required" placeholder="나이" class="cms-input-text cms-input-color0">
                                    </div>
                                    <div class="cms-clear-both"></div>
                              </div>
                    
                                <div class="cms-item-row cms-margin-top-10">
                                    <div class="cms-width-30pro">
                              <select name="휴대폰번호1" required="required" placeholder="연락처" class="cms-input-text cms-input-color0">
                                <option value="010">010</option>
                                <option value="011">011</option>
                                <option value="016">016</option>
                                <option value="017">017</option>
                                <option value="018">018</option>
                                <option value="019">019</option>
                              </select>
                            </div>
                                    <div class="cms-width-5pro">-</div>
                                    <div class="cms-width-30pro">
                                        <input type="tel" name="휴대폰번호2" maxlength="4" required="required" placeholder="연락처" class="cms-input-text cms-input-color0">
                                    </div>
                                    <div class="cms-width-5pro">-</div>
                                    <div class="cms-width-30pro">
                                        <input type="tel" name="휴대폰번호3" maxlength="4" required="required" placeholder="연락처" class="cms-input-text cms-input-color0">
                                    </div>
                                    <div class="cms-clear-both"></div>
                              </div>
                    
                                <div class="cms-item-row cms-margin-top-10">
                            <select name="통화가능시간" required="required" class="cms-input-text cms-input-color0">
                              <option value="">통화가능시간 선택</option>
                              <option value="언제나 통화 가능">언제나 통화 가능</option>
                              <option value="오전 09:00~10:00">오전 09:00 ~ 10:00</option>
                              <option value="오전 10:00~11:00">오전 10:00 ~ 11:00</option>
                              <option value="오전 11:00~12:00">오전 11:00 ~ 12:00</option>
                              <option value="점심 12:00~01:00">점심 12:00 ~ 01:00</option>
                              <option value="오후 01:00~02:00">오후 01:00 ~ 02:00</option>
                              <option value="오후 02:00~03:00">오후 02:00 ~ 03:00</option>
                              <option value="오후 03:00~04:00">오후 03:00 ~ 04:00</option>
                              <option value="오후 04:00~05:00">오후 04:00 ~ 05:00</option>
                              <option value="오후 05:00~06:00">오후 05:00 ~ 06:00</option>
                              <option value="오후 06:00~07:00">오후 06:00 ~ 07:00</option>
                            </select>
                                </div>
                        
                                <div class="cms-item-row cms-margin-top-10">
                                    <input type="text" name="문의사항" maxlength="100" placeholder="문의사항" class="cms-input-text cms-input-color0">
                                </div>
                    
                        
                          <div class="cms-item-row cms-margin-top-10">
                            <ul>
                              <li class="cms-radio-li cms-radio-color0">
                                <input type="checkbox" required="required" id="" checked><label for=""> 개인정보 수집·이용 동의</label>
                                <a href="/01.html" target="_blank" class="Color-Box">[보기]</a>
                              </li>
                            </ul>
                                    <div class="cms-clear-both"></div>
                          </div>
                    
                          <div class="cms-button cms-btn-color0 cms-margin-top-10">
                                                <button ><span ><b>무료상담신청하기</b></span></button>
                                </div>
                    
                                <input type=hidden name="refe" value="/insert_form0.php?it=390&pt=flosmarketing"> 
                                <input type=hidden name="refer_url" value="">
                    
                        </form>


                        <form accept-charset="euc-kr"  checkform action="https://marketclub.cafe24.com/pr_test2.php" method="post" name="" onsubmit="document.charset='euc-kr';" target="hidden_iframe12" id="form4">
                            <input type="hidden" name="partner_id" value="flosmarketing">
                            <INPUT type=hidden name=item_no value="737">
                            <input type="hidden" name="refe" value=" ">
                            <input type="hidden" name="mcheck" value=" ">
                            <input type="hidden" name="ru" value=""><!-- 마케터수동입력 -->
                            
                                        <div class="cms-item-row">
                                            <div class="cms-width-48pro">
                                                <input type="text" name="user_name" maxlength="5" required="required" placeholder="이름" class="cms-input-text cms-input-color0">
                                            </div>
                                            <div class="cms-width-4pro">&nbsp;</div>
                                            <div class="cms-width-48pro">
                                                <input type="text" name="나이" maxlength="2" required="required" placeholder="나이" class="cms-input-text cms-input-color0">
                                            </div>
                                            <div class="cms-clear-both"></div>
                                      </div>
                            
                                        <div class="cms-item-row cms-margin-top-10">
                                            <div class="cms-width-30pro">
                                      <select name="휴대폰번호1" required="required" placeholder="연락처" class="cms-input-text cms-input-color0">
                                        <option value="010">010</option>
                                        <option value="011">011</option>
                                        <option value="016">016</option>
                                        <option value="017">017</option>
                                        <option value="018">018</option>
                                        <option value="019">019</option>
                                      </select>
                                    </div>
                                            <div class="cms-width-5pro">-</div>
                                            <div class="cms-width-30pro">
                                                <input type="tel" name="휴대폰번호2" maxlength="4" required="required" placeholder="연락처" class="cms-input-text cms-input-color0">
                                            </div>
                                            <div class="cms-width-5pro">-</div>
                                            <div class="cms-width-30pro">
                                                <input type="tel" name="휴대폰번호3" maxlength="4" required="required" placeholder="연락처" class="cms-input-text cms-input-color0">
                                            </div>
                                            <div class="cms-clear-both"></div>
                                      </div>
                            
                                        <div class="cms-item-row cms-margin-top-10">
                                    <select name="통화가능시간" required="required" class="cms-input-text cms-input-color0">
                                      <option value="">통화가능시간 선택</option>
                                      <option value="언제나 통화 가능">언제나 통화 가능</option>
                                      <option value="오전 09:00~10:00">오전 09:00 ~ 10:00</option>
                                      <option value="오전 10:00~11:00">오전 10:00 ~ 11:00</option>
                                      <option value="오전 11:00~12:00">오전 11:00 ~ 12:00</option>
                                      <option value="점심 12:00~01:00">점심 12:00 ~ 01:00</option>
                                      <option value="오후 01:00~02:00">오후 01:00 ~ 02:00</option>
                                      <option value="오후 02:00~03:00">오후 02:00 ~ 03:00</option>
                                      <option value="오후 03:00~04:00">오후 03:00 ~ 04:00</option>
                                      <option value="오후 04:00~05:00">오후 04:00 ~ 05:00</option>
                                      <option value="오후 05:00~06:00">오후 05:00 ~ 06:00</option>
                                      <option value="오후 06:00~07:00">오후 06:00 ~ 07:00</option>
                                    </select>
                                        </div>
                                
                                        <div class="cms-item-row cms-margin-top-10">
                                            <input type="text" name="문의사항" maxlength="100" placeholder="문의사항" class="cms-input-text cms-input-color0">
                                        </div>
                            
                                
                                  <div class="cms-item-row cms-margin-top-10">
                                    <ul>
                                      <li class="cms-radio-li cms-radio-color0">
                                        <input type="checkbox" required="required" id="" checked><label for=""> 개인정보 수집·이용 동의</label>
                                        <a href="/01.html" target="_blank" class="Color-Box">[보기]</a>
                                      </li>
                                    </ul>
                                            <div class="cms-clear-both"></div>
                                  </div>
                            
                                  <div class="cms-button cms-btn-color0 cms-margin-top-10">
                                                        <button ><span ><b>무료상담신청하기</b></span></button>
                                        </div>
                            
                                        <input type=hidden name="refe" value="/insert_form0.php?it=737&pt=flosmarketing"> 
                                        <input type=hidden name="refer_url" value="">
                            
                                </form>

                                <form accept-charset="euc-kr"  checkform action="https://marketclub.cafe24.com/pr_test2.php" method="post" id="form5" name="" onsubmit="document.charset='euc-kr';" target="hidden_iframe12">
                                <input type="hidden" name="partner_id" value="flosmarketing">
                                <INPUT type=hidden name=item_no value="676">
                                <input type="hidden" name="refe" value=" ">
                                <input type="hidden" name="mcheck" value=" ">
                                <input type="hidden" name="ru" value=""><!-- 마케터수동입력 -->
                                
                                        <div class="detfm2" style="padding:10px 10px 10px 10px;">
                                          <h4 class="rgb4"></h4>
                                          <div class="fmfrm">
                                            <div><input type="text" placeholder="이름" name="user_name" required/></div>
                                            <div><input type="text" placeholder="나이" name="나이" required/></div>
                                            <div>
                                              
                                              <div style="width:30%;float:left;">
                                                <select name='휴대폰번호1' required style="width:100%;height:52px;">
                                                <option value='010' >010</option>
                                                <option value='011' >011</option>
                                                <option value='016' >016</option>
                                                <option value='017' >017</option>
                                                <option value='018' >018</option>
                                                <option value='019' >019</option>
                                                </select>
                                              </div>
                                              <div style="width:5%;float:left;text-align:center;"></div>
                                              <div style="width:30%;float:left;">
                                                <input type="text"  name="휴대폰번호2" required/ maxlength="4" >
                                              </div>
                                              <div style="width:5%;float:left;text-align:center;"></div>
                                              <div style="width:30%;float:left;">
                                                <input type="text"  name="휴대폰번호3" required/ maxlength="4" >
                                              </div>
                                
                                            </div>
                                            <div>
                                  
                                              <div style="width:100%;float:left;">
                                                <select name='상담가능시간' required style="width:100%;height:52px;">
                                                  <option value="">통화가능시간 선택</option>
                                                  <option value="언제나 통화 가능">언제나 통화 가능</option>
                                                  <option value="오전 09:00~10:00">오전 09:00 ~ 10:00</option>
                                                  <option value="오전 10:00~11:00">오전 10:00 ~ 11:00</option>
                                                  <option value="오전 11:00~12:00">오전 11:00 ~ 12:00</option>
                                                  <option value="점심 12:00~01:00">점심 12:00 ~ 01:00</option>
                                                  <option value="오후 01:00~02:00">오후 01:00 ~ 02:00</option>
                                                  <option value="오후 02:00~03:00">오후 02:00 ~ 03:00</option>
                                                  <option value="오후 03:00~04:00">오후 03:00 ~ 04:00</option>
                                                  <option value="오후 04:00~05:00">오후 04:00 ~ 05:00</option>
                                                  <option value="오후 05:00~06:00">오후 05:00 ~ 06:00</option>
                                                  <option value="오후 06:00~07:00">오후 06:00 ~ 07:00</option>
                                                </select>
                                              </div>
                                            </div>
                                            <div><input type="text" placeholder="문의사항" name="문의사항" ></div>
                                            <div style="width:100%;margin:0 auto;"><input type="submit" value="무료상담신청하기" class="btn_submit" id="btn_submit_id"/></div>
                                            <div class="chks">
                                              <input type="checkbox" type="checkbox" name="all_chk" checked required/> 개인정보취급방침에 동의합니다.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="c"></div>
                                      </div>
                                
                                      <input type=hidden name="refe" value="/form_make/form.php?it=676&pt=flosmarketing"> 
                                      <input type=hidden name="refer_url" value="">
                                  
                                    </form>
                            </div>

`;

document.body.appendChild(form.content);