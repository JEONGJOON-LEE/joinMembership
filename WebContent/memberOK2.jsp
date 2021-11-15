<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%
	request.setCharacterEncoding("UTF-8");
//	Date date = new Date();
//	out.println(date + "<br>");
%>

<!-- 
	useBean 액션 태그 객체를 만들 때 사용한다.
	id 속성에 만들려 하는 객체의 이름을 쓴다.
	class 속성에 객체를 만들려 하는 클래스 이름을 반드시 풀 패키지 이름과 같이 쓴다.
	액션 태그는 xml 문법을 따르기 때문에 <tag>와</tag> 사이에 아무런 내용이 코딩되지 않을 경우 
	</tag>를 생략할 수 있는데 이때 <tag>의 끝에 "/"를 입력해서 <tag/>와 같은 형태를 만들어주면 생략이 가능하다.
-->

<jsp:useBean id="date" class="java.util.Date"/>
${date}<br/>

<!-- MemberVO vo = new MemberVO();와 같은 기능이 실행된다. -->
<jsp:useBean id="vo" class="com.koreait.useBean.MemberVO">
	
<!-- 
		setProperty 액션 태그는 지정된 멤버 변수의 setter 메소드를 실행한다.
		property 속성에는 setter 메소드를 실행할 멤버 변수의 이름을 쓴다.
		name 속성에는 setter 메소드를 실행할 멤버 변수가 정의된 객체 이름을 쓴다.
 -->
	 
<!--
	아래의 2문장과 같은 기능이 실행된다.
	String id = request.getParameter("id");
	vo.setId(id);  
	
	<jsp:setProperty property="id" name="vo"/>
	<jsp:setProperty property="name" name="vo"/>
	<jsp:setProperty property="password" name="vo"/>
	<jsp:setProperty property="age" name="vo"/>
	<jsp:setProperty property="gender" name="vo"/>
-->
 <!-- 
 	property 속성에 "*"을 입력하면 모든 멤버 변수의 setter 메소드가 실행된다.
 	form의 name 속성의 속성값과 같은 이름의 멤버 변수의 setter 메소드만 실행된다.
  -->
 	<jsp:setProperty property="*" name="vo"/>
</jsp:useBean>

<%
	String ip = request.getRemoteAddr();
	vo.setIp(ip);
%>

${vo}<br/>

</body>
</html>