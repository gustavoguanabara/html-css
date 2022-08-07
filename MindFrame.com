<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>MindFrame.com</title>
</head>
<style type="text/css">
	*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html{
	font-size: 10px;
	font-family: 'Roboto', sans-serif; 
}

body{
	overflow-x: hidden;
}

header{
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1000;
}

.main-nav{
	width: 100%;
	height: 10rem;
	padding: 0 2.5rem;
	display: flex;
	align-items: center;
	background-attachment: fixed;
	justify-content: space-between;
}

.logo a{	
	font-family: 'Lato', sans-serif;
	font-size: 1.6rem;
	color: #eee;
	text-decoration: none;
	letter-spacing: 1px;
	outline: 2px solid #eee;
	padding: 1rem 2rem;
}

.hamburger-menu{
	height: 5rem;
	width: 5rem;
	background-color: #eee;
	border-radius: .4rem;
	box-shadow: 
				.5rem .5rem 1rem #cacaca,
				-.5rem -.5rem 1rem #fff;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 2000;
}

.hamburger-menu:hover{
	box-shadow: 
				inset .5rem .5rem 1rem #cacaca,
				inset -.5rem -.5rem 1rem #fff;
}

.bar{
	width: 3rem;
	height: 2px;
	background-color: #333;
	display: inline-block;
	position: relative;
	transition: background-color .5s;
}

.bar::before,
.bar::after{
	content: "";
	position: absolute;
	width: inherit;
	height: inherit;
	background-color: #333;
	transition: all .5s;
}

.bar::before{
	top: -.8rem;
}

.bar::after{
	top: .8rem;
}

.open .bar{
	background-color: transparent;
}

.open .bar::before{
	top: 0;
	transform: rotate(135deg);
}

.open .bar::after{
	top: 0;
	transform: rotate(-135deg);
}

.nav-list{
	width: 50rem;
	height: 100vh;
	position: absolute;
	top: 0;
	right: 0;
	background-color: #eee;
	transform: translateX(55rem);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	box-shadow: -.5rem 0 1rem rgba(0,0,0,.1);
	z-index: 1500;
	transition: transform .5s;
}

.open .nav-list{
	transform: translateX(0);
}

.nav-item{
	list-style: none;
	border-bottom: 2px solid crimson;
}

.nav-link{
	text-decoration: none;
	display: block;
	color: #333;
	font-size: 1.6rem;
	font-weight: 700;
	text-transform: uppercase;
	padding: .5rem;
	transition: color .5s;
}

.nav-link:hover{
	color: crimson;
}

.hero{
	width: 100%;
	height: 100vh;
	background: url("m5.jpeg") center no-repeat;
	background-size: cover;
	position: relative;
}

.hero::after{
	content: '';
	position: absolute;
	width: inherit;
	height: inherit;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,.5);
}

.hero-clipped{
	width: 60%;
	height: inherit;
	background-color: #eee;
	position: absolute;
	top: 0;
	right: 0;
	clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
	transform-origin: right;
	z-index: 10;
}

.hero-textbox{
	width: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-family: 'Lato', sans-serif;
	text-transform: uppercase;
	text-align: center;
	line-height: 1.5;
	color: #333;
	padding: 1rem;
	z-index: 20;
}

.main-heading{
	font-size: 3rem;
	font-weight: 550;
	letter-spacing: .7rem;
}

.sub-heading{
	font-size: 1.6rem;
	font-weight: 400;
	letter-spacing: .4rem;
}

.cta-btn{
	display: inline-block;
	font-size: 1.2rem;
	letter-spacing: 1px;
	text-decoration: none;
	color: #fff;
	background-color: crimson;
	padding: 1rem 4rem;
	margin-top: 5rem;
	border-radius: .4rem;
	box-shadow: 3px 3px 1rem rgba(0,0,0,.3);
	position: relative;
}

.cta-btn::after{
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: inherit;
	border-radius: inherit;
	z-index: -1;
}

.cta-btn:hover::after{
	transform: scaleX(1.2) scaleY(1.6);
	opacity: 0;
	transition: all .5s;
}
@media screen and (max-width: 1400px){
	.hero-clipped{
		width: 100%;
		height: 75vh;
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 60%);
	}

	.logo a{
		color: #333;
		outline-color: #333;
	}
}

@media screen and (max-width: 760px){
	.nav-list{
		width: 30rem;
	}

	.main-heading{
		font-size: 4rem;
	}

	.sub-heading{
		font-size: 1.2rem;
	}

	.cta-btn{
		padding: 1rem 2.5rem;
	}
}

@media screen and (max-width: 760px){
	
	.main-heading{
		font-size: 2.5rem;
	}

	.sub-heading{
		font-size: 1rem;
	}

	.cta-btn{
		padding: 3rem;
	}
}
</style>
<body>
<header>
	<nav class="main-nav">
		<div class="logo">
			<a href="index.html">MindFrame.com</a>
		</div>
		<div class="hamburger-menu">
			<span class="bar"></span>
		</div>
		<ul class="nav-list">
			<li class="nav-item">
				<a href="#" class="nav-link">Home</a>
			</li>
			<li class="nav-item">
				<a href="#" class="nav-link">About</a>
			</li>
			<li class="nav-item">
				<a href="#" class="nav-link">Contact  Us</a>
			</li>
		</ul>
	</nav>
</header>
<section class="hero">
	<div class="hero-clipped">
		<div class="hero-textbox">
			<h1 class="main-heading">MindFrame.com</h1>
			<h2 class="sub-heading">Be a well advisor</h2>
			<a href="#" class="cta-btn">Go check!</a>
		</div>
	</div>
</section>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js"></script>
<script>
	const mainNav = document.querySelector('.main-nav');
	const hamburgerMenu = document.querySelector('.hamburger-menu');

	hamburgerMenu.addEventListener('click', function(){
		mainNav.classList.toggle('open');
	});

	gsap.fromTo('.hero-clipped', {scaleX: 0}, {duration:1, scaleX: 1});
	gsap.fromTo('.logo', {x: -200, opacity: 0}, {duration: 1, delay: .5, x: 0, opacity: 1});
	gsap.fromTo('.hamburger-menu', {x: 200, opacity: 0}, {duration: 1, delay: .8, x:0, opacity: 1});
	gsap.fromTo('.hero-textbox', {yPercent: 40, opacity: 0}, {duration: 1, delay: 1.3, yPercent: -50, opacity: 1});
</script>
</body>
</html>
