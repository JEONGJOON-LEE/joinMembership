function passwordCheck(obj){
//	입력한 비밀번호가 8자 이상 12자 이하인가 검사한다.
	/*
	var len = obj.password.value.trim().length;
	if (len < 8 || len > 12) {
		alert('비밀번호는 8자 이상 12자 이하로 입력해야 합니다.')
		obj.password.value = '';
		obj.repassword.value = '';
		obj.password.focus();
		return false;
	} 
	
//	영문자, 숫자, 특수문자가 각각 1개 이상 입력되었나 검사한다.
	var alphaCount = 0;
	var numberCount = 0;
	var etcCount = 0;
//	입력된 비밀번호의 문자 개수만큼 반복하며 영문자, 숫자, 특수문자의 개수를 센다.
	var pw = obj.password.value.trim();
	for (var i = 0; i < len; i++){
		if(pw.charAt(i) >= 'a' && pw.charAt(i) <= 'z' || pw.charAt(i) >= 'A' && pw.charAt(i) <= 'Z'){
			alphaCount++;
		} else if(pw.charAt(i) >= '0' && pw.charAt(i) <= '9'){
			numberCount++;
		} else {
			etcCount++
		}
	}
	alert('영문자: ' + alphaCount + "개\n숫자: " + numberCount + "개\n특수문자: " + etcCount + "개")
	if(alphaCount == 0 || numberCount == 0 || etcCount == 0){
		alert('영문자, 숫자, 특수문자는 각각 1개 이상 입력해야 합니다.');
		obj.password.value = '';
		obj.repassword.value = '';
		obj.password.focus();
		return false;
	}
	*/
	var pw = obj.password.value.trim();
//	정규 표현식(정규식)을 사용한 영문자, 대소문자, 숫자, 특수문자가 각각 1개 이상 입력되었고 8자 이상 12자 이하로 입력되었나 검사한다.
//	new RegExp('정규식 패턴') => javascript 정규식 객체를 만든다.
//	. => 모든 문자 1글자를 대신한다.
//	* => 모든 문자를 0글자 이상 대신한다.
//	+ => 모든 문자를 1글자 이상 대신한다.
//	^ => 시작하는
//	$ => 끝나는
//	var pattern = new RegExp('^.{8}$');				// 글자수 제한 => 무조건 8자만 허용한다.
//	var pattern = new RegExp('^.{1,8}$');			// 글자수 제한 => 1 ~ 8자 사이만 허용한다.
//	var pattern = new RegExp('^.{8,}$');			// 글자수 제한 => 8자 이상만 허용한다.
//	var pattern = new RegExp('^.{8,12}$');			// 글자수 제한 => 8 ~ 12자 사이만 허용한다.
	
//	var pattern = new RegExp('^[0123456789]+$');	// 숫자만 입력을 허용한다. 
//	var pattern = new RegExp('^[0-9]+$');			// 숫자만 입력을 허용한다. => [] 내부에 '-'를 사용해서 범위를 지정한다.
//	var pattern = new RegExp('^[0-9]{4}$');			// 숫자 4글자만 입력을 허용한다.
//	var pattern = new RegExp('^[A-Z]+$');			// 영문자 대문자만 입력을 허용한다.
//	var pattern = new RegExp('^[a-z]+$');			// 영문자 소문자만 입력을 허용한다.
//	var pattern = new RegExp('^[A-Za-z]+$');		// 영문자만 입력을 허용한다.
//	var pattern = new RegExp('^[!@#$%^&]+$');		// 특수문자는 '!@#$%^&'만 입력을 허용한다.
//	var pattern = new RegExp('^[ㄱ-힣]+$');			// 한글만 입력을 허용한다.
	
//	숫자, 영문자, 특수문자(!@#$%^&)만 8자 이상 12자 이하로 입력을 허용한다.
//	var pattern = new RegExp('^[0-9a-zA-Z!@#$%^&]{8,12}$');
	
//	긍정형 전방 탐색 기능으로 특정 문자가 포함되어있나 검사한다. => (?=.*)
//	var pattern = new RegExp('(?=.*[0-9])');		// 숫자가 포함되어있나 검사한다.
//	var pattern = new RegExp('(?=.*[A-Z])');		// 대문자가 포함되어있나 검사한다.
//	var pattern = new RegExp('(?=.*[a-z])');		// 소문자가 포함되어있나 검사한다.
//	var pattern = new RegExp('(?=.*[A-Za-z])');		// 영문자 포함되어있나 검사한다.
//	var pattern = new RegExp('(?=.*[ㄱ-힣])');		// 한글이 포함되어있나 검사한다.
//	var pattern = new RegExp('(?=.*[!@#$%^&])');	// 특수문자가 포함되어있나 검사한다.
	
	var pattern = new RegExp('^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&])[0-9a-zA-Z!@#$%^&]{8,12}$')
	
	
//	test() 함수는 인수로 지정된 문자열이 정규식 패턴을 만족하는가 검사해서 만족하면 true, 만족하지 못하면 false를 리턴한다.
	if (!pattern.test(pw)){
		alert('영문자, 숫자, 특수문자는 각각 1개 이상 입력해야 합니다.')
		obj.password.value = '';
		obj.repassword.value = '';
		obj.password.focus();
		return false;
	}
	
//	입력한 두개의 비밀번호가 같은가 검사한다.
	if(obj.password.value.trim() != obj.repassword.value.trim()){
		alert('비밀번호가 일치하지 않습니다.');
		obj.password.value = '';
		obj.repassword.value = '';
		obj.password.focus();
		return false;
	}
	
	return true;
}




















