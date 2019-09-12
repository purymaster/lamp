# 램프에듀케이션 LMS 솔루션

## 작업범위

- 웹 기준 브라우저 : Chrome(이외의 브라우저 고려하지 않음)
- 모바일 기준 디바이스 : Galaxy Tab S3(이외의 디바이스 고려하지 않음)

## 작업기간

2017-08 ~ 2017-09

## 앱 다운로드주소

프로젝트 홀딩으로 인한 작업 종료

## 코딩맵

[코딩맵 바로가기](https://purymaster.github.io/lamp/codingmap.html)

## 네이밍 규칙

- 이름은 영문 소문자, 숫자, 언더스코어(_)로 작성하며, 영문 대문자, 숫자로 시작할 수 없다.
- 레이아웃에는 다음 항에 명시된 id만 사용한다.
- #wrap(전체), #header(머리글), #content(본문), #footer(바닥글). 단, HTML5 DTD 선언 시 #header, #footer는 각각 header, footer 엘리먼트로 대체한다.
- 레이아웃을 제외한 id는 스타일을 지정하지 않으며, 디자인 속성을 추가/변경하려면 class를 사용한다.
- 이미지 이름은 '형태_의미' 또는 '형태_의미_상태' 순서로 조합한다.(bl_list_on)
- HTML 파일명은 IA 정의서 또는 화면 설계서에서 정의한 페이지 코드를 그대로 사용한다.

## HTML 코드 작성 규칙

- HTML은 해당 DTD의 명세에 맞게 작성한다.
- HTML5 DTD 선언 시 iframe 엘리먼트의 frameborder 애트리뷰트에 대한 오류는 허용한다.
- 애트리뷰트값은 큰따옴표("")로 묶는다.
- 마크업의 중첩이 깊어질 때마다 자식 엘리먼트는 1탭 들여 쓰고, 1탭의 크기는 공백 4칸으로 설정한다.
- html, head, body의 자식 엘리먼트는 들여쓰지 않는다.
- 의미 있는 객체를 구분하기 위하여 코드 그룹 간 1줄씩 빈 줄을 만드는 것은 허용한다.
- 빈 줄의 간격은 1줄을 초과하지 않으며, 빈 줄을 사용하는 것은 선택 사항이다.
- 시작과 종료 주석의 주석 내용은 동일해야 한다.
- 개발 적용과 관련된 주석은 해당되는 영역 위에 표기하며, 종료 주석은 표기하지 않는다.
- 개발 적용과 관련된 주석은 [D]라는 말머리를 사용한다.

## HTML 엘리먼트 작성 규칙

- 특정 엘리먼트에 class, style을 선언할 때는 class, style 순으로 제일 마지막에 선언한다.(단, 폼 엘리먼트는 예외, 별도 참조 요망)
- 폼 컨트롤 엘리먼트를 마크업할 때 fieldset, legend 엘리먼트를 선언하며, form 엘리먼트는 별도로 선언하지 않는다.(개발 작업 진행 시, 선언 위치의 변동 가능성이 있기때문에)
- input 엘리먼트에서 placeholder, checked, disabled는 제일 마지막에 선언한다.
- label 엘리먼트는 해당 input 엘리먼트의 id값과 동일한 이름으로 연결한다.
- textarea 엘리먼트는 CSS를 정상적으로 불러오지 못하는 상황에서도 사용에 문제가 없도록 cols, rows 애트리뷰트값을 각각 30, 5로 선언한다.
- colgroup, col 엘리먼트는 디자인을 제어할 때 선언한다.
- 표에 셀 제목이 명시되지 않은 경우에도 th 또는 span 엘리먼트를 선언하여 의미에 맞는 제목을 명시한다.(CSS로 숨김 처리)
- th 엘리먼트는 반드시 scope를 선언한다.
- a 엘리먼트는 href, target, title 순서로 애트리뷰트를 선언한다. title 애트리뷰트는 예고 없이 새 창을 표시할 때 '새창열림'으로 표기한다.
- iframe 엘리먼트는 내용이 빈 경우에도 빈 아이프레임이라는 것을 명시한다.
- img 엘리먼트는 src, width, height, title, alt, usemap 순서로 애트리뷰트를 선언한다.

## CSS 엘리먼트 작성 규칙

- 모든 속성은 영문 소문자로만 작성한다.
- 마지막 속성의 세미콜론을 삭제하지 않는다.
- CSS 코드를 작성할 때는 들여쓰기를 하지 않는다.
- 속성 간 공백 및 속성 값 사이에는 반드시 공백 한 칸이 있어야 한다.

~~~
.selector {width:10px; height:10px;}
~~~

- 열림 중괄호 좌측에는 반드시 공백 한 칸이 있어야 한다.
- 의미 있는 객체를 구분하기 위하여 코드 그룹 간 1줄씩 빈 줄을 만드는 것은 허용한다.
- 빈 줄의 간격은 1줄을 초과하지 않으며, 빈 줄을 사용하는 것은 선택 사항이다.
- 복수 선택자 값 사이에는 반드시 줄 바꿈을 한다.
- 속성, 속성 값 사이 줄 바꿈은 허용하지 않는다.
- HTML과 동일한 인코딩을 문서 첫 줄에 공백 없이 선언한다.
- 파일을 저장할 때는 반드시 선언한 인코딩과 동일한 인코딩을 선택한다.

~~~
@charset "utf-8";
~~~

- 속성을 선언할 때는 그 쓰임새가 레이아웃과 관련이 큰 것부터 시작한다.
- display(표시) / overflow(넘침) / float(흐름) / position(위치) / width & height(크기) / margin & padding(간격) / border(테두리) / background(배경) / font & color(글꼴) / animation / 기타

~~~
.selector {display:block; visibility:visible; overflow:visible; float:none; position:static; top:0; left:0; width:0; height:0; line-height:0;
margin:0; padding:0; border:0; background:#000 url("#") 0 0 repeat; font-family:arial; font-size:0; font-weight:normal; font-style:normal;
text-align:left; text-indent:0;}
~~~

- 가상 선택자의 경우, content 속성을 가장 먼저 선언한다.
- 폰트 스타일은 약식 속성으로 선언하지 않는다.
- z-index 속성의 속성 값의 범위는 최소 -1, 최고 10000이며, 필요에 따라 5, 10, 100 단위로 증감한다.(예외로 1단위 증감 가능)
- 미디어 타입은 기본 CSS 파일의 가장 아랫부분에 선언하며 별도의 CSS 생성은 허용하지 않는다.
- 단발성 페이지의 CSS 분량이 적을 경우, Internal(embedded) type으로 선언한다.
- 의미 있는 객체를 구분하기 위한 주석은 영역의 윗부분에 표기한다.
- 주석 기호와 주석 내용 사이에는 반드시 공백 한 칸이 있어야 한다.
- 종료 주석을 사용하지 않는다.
- 초기화 CSS는 아래의 내용을 먼저 선언한 후, 필요에 따라 일부 속성을 수정하여 사용한다.

~~~
@charset "utf-8";

/* Reset */
body, p, h1, h2, h3, h4, h5, h6, ul, ol, li, dl, dt, dd, table, th, td, form, fieldset, legend, input, textarea, button, select {margin:0; padding:0;}
body, input, textarea, select, button, table {font-family:'돋움', Dotum, AppleGothic, sansserif; font-size:12px;}
img, fieldset {border:0;}
ul, ol {list-style:none;}
em, address {font-style:normal;}
a {text-decoration:none;}
a:hover, a:active, a:focus {text-decoration:underline;}
table {border-collapse:collapse;}
~~~

## DTD 선언, 인코딩, Viewport

- HTML 문서는 반드시 DTD를 선언하며, 신규 HTML 문서 작성시 'HTML5'을 사용한다.
- 신규 HTML 문서를 작성할 때 기본 인코딩은 utf-8을 원칙으로 한다.
- 브라우저에서 최신 렌더링 모드로 동작하도록 meta 엘리먼트를 사용하여 어떤 렌더링 엔진을 사용할지 설정한다.
- 모바일 브라우저에 대응하는 HTML 문서의 head 엘리먼트 안에 반드시 뷰포트를 설정한다.

~~~
<!-- Admin Portal -->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=1280">
<title>LAMP :: 메뉴이름</title>
</head>

<!-- Mail -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="viewport" content="width=600" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>메뉴이름</title>
</head>

<!-- App(공통) -->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=1024">
<title>LAMP :: 메뉴이름</title>
</head>
~~~