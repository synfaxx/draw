//@prepros-prepend jquery-3.5.1.min.js
$(document).ready(function(){
	var 	v1 = localStorage.getItem("fil-v1"),i,
			v2 = 0,
			v3 = 100,
			v4 = 0,
			v5 = 0,
			v6 = 0,
			v7 = 100,
			v8 = 0,
			v9 = "../images/filter/filter_bg.jpg",v10="Выберите Файл";
	var animBool, mouseAlert = localStorage.getItem("mouse-help");

	if(v1!==null){
		v2=localStorage.getItem("fil-v2");
		v3=localStorage.getItem("fil-v3");
		v4=localStorage.getItem("fil-v4");
		v5=localStorage.getItem("fil-v5");
		v6=localStorage.getItem("fil-v6");
		v7=localStorage.getItem("fil-v7");
		v8=localStorage.getItem("fil-v8");
		v9=localStorage.getItem("fil-v9");
		v10=localStorage.getItem("fil-v10")
	} else {
		v1=100;
	};

	if (v9 === "undefined" || v10 === "null") {
		v9 = "../images/filter/filter_bg.jpg";
		v10 = "Выберите Файл";
		$('.example,.filter').css('background-image',"url("+v9+")")
	};

	if (mouseAlert === "null") {
		$(".change-row__input_range").on("mouseenter",function(){
			if(mouseAlert!==true){
				$(".alert-info").addClass("alerted");
				$(".alert-info").addClass("help-mouse");
				setTimeout(function(){
					mouseAlert = true;
					$(".alert-info").removeClass("alerted");
				},6000);
			};
		});
		$(".alert-info__text").text("Нажми правой кнопкой мыши на ползунок чтобы сбросить значение в нём.");
	};

	$(".file-box__fake").text(v10);

	function addBGI(code){
		if(code !== "undefined"){
			$('.example,.filter').css('background-image',"url("+code+")");
		} else {
			v9 = "../images/filter/filter_bg.jpg";
			$('.example,.filter').css('background-image',"url("+v9+")");
		}
	};
	addBGI(v9);

	styleExample();
	function addValues(){
		$('.in1').val(v1);
		$('.in2').val(v2);
		$('.in3').val(v3);
		$('.in4').val(v4);
		$('.in5').val(v5);
		$('.in6').val(v6);
		$('.in7').val(v7);
		$('.in8').val(v8);
	};
	addValues();

	window.addEventListener("unload",function(){
	  localStorage.setItem("fil-v1",v1);
	  localStorage.setItem("fil-v2",v2);
	  localStorage.setItem("fil-v3",v3);
	  localStorage.setItem("fil-v4",v4);
	  localStorage.setItem("fil-v5",v5);
	  localStorage.setItem("fil-v6",v6);
	  localStorage.setItem("fil-v7",v7);
	  localStorage.setItem("fil-v8",v8);
	  localStorage.setItem("fil-v9",v9);
	  localStorage.setItem("fil-v10",v10);
	  localStorage.setItem("mouse-help",mouseAlert);
	});

	function filterValues(){
		v1 == 100 ? $(".all-v1").addClass("delete") :
		$(".all-v1").removeClass("delete"), $(".val1").text(v1);
		v2 == 0 ? $(".all-v2").addClass("delete") :
		$(".all-v2").removeClass("delete"), $(".val2").text(v2);
		v3 == 100 ? $(".all-v3").addClass("delete") :
		$(".all-v3").removeClass("delete"), $(".val3").text(v3);
		v4 == 0 ? $(".all-v4").addClass("delete") :
		$(".all-v4").removeClass("delete"), $(".val4").text(v4);
		v5 == 0 ? $(".all-v5").addClass("delete") :
		$(".all-v5").removeClass("delete"), $(".val5").text(v5);
		v6 == 0 ? $(".all-v6").addClass("delete") :
		$(".all-v6").removeClass("delete"), $(".val6").text(v6);
		v7 == 100 ? $(".all-v7").addClass("delete") :
		$(".all-v7").removeClass("delete"), $(".val7").text(v2);
		v8 == 0 ? $(".all-v8").addClass("delete") :
		$(".all-v8").removeClass("delete"), $(".val8").text(v8);
	};

	function styleExample(){
		$(".example").css(
			"filter","brightness("+v1+"%) blur("+v2+"px) contrast("+v3+"%)	grayscale("+v4+"%) hue-rotate("+v5+"deg) invert("+v6+"%) saturate("+v7+"%) sepia("+v8+"%)"
		);
		filterValues();
	};

	$(".in1").on("input",function(){
		v1=$(this).val();
		styleExample();
	});
	$(".in2").on("input",function(){
		v2=$(this).val();
		styleExample();
	});
	$(".in3").on("input",function(){
		v3=$(this).val();
		styleExample();
	});
	$(".in4").on("input",function(){
		v4=$(this).val();
		styleExample();
	});
	$(".in5").on("input",function(){
		v5=$(this).val();
		styleExample();
	});
	$(".in6").on("input",function(){
		v6=$(this).val();
		styleExample();
	});
	$(".in7").on("input",function(){
		v7=$(this).val();
		styleExample();
	});
	$(".in8").on("input",function(){
		v8=$(this).val();
		styleExample();
	});

	var fileNameCopy;
	document.getElementById('file-in').addEventListener("change",function(e){
		if (this.files && this.files[0]){
			let fileName = v10 = this.value.split("\\")[this.value.split("\\").length-1];
			fileNameCopy = fileName;

			var reader = new FileReader();
			reader.onload = function (e) {
				v9 = e.target.result;
				addBGI(v9);
			};
			reader.readAsDataURL(this.files[0]);

			fileName!=="" ?
			$(".file-box__fake").text(fileName) :
				fileNameCopy === undefined ?
				$(".file-box__fake").text("Выберите Файл") :
				$(".file-box__fake").text(fileNameCopy);
		};
	});
	
	// var timeoutGuide,guideBool;
	// $(".help-button").on("click",function(){
	// 	clearTimeout(timeoutGuide);
	// 	$(".fixed-guide").addClass("active");
	
	// 	if(!guideBool){
	// 		$(".fixed-guide__img-block").html("<img src=\"images/guide/guide_3d.jpg\" alt=\"Guide is not found 404\">");
	// 		$(".fixed-guide__lay").html("<img src=\"images/icons/click.svg\" alt=\"Click Here\">");
	// 		guideBool=true;
	// 	};
	
	// 	timeoutGuide = setTimeout(function(){
	// 		$(".fixed-guide").removeClass("active");
	// 	},4000);
	// });

	for (i=0;i<document.getElementsByClassName("filter").length;i++){
		$(".filter").eq(i).css("filter",$(".filter").eq(i).attr("data-fil"));
	};
	$(".filter").on("click",function(){
		$(".filter.active").removeClass("active");
		$(this).addClass("active");
		$(".example").addClass("animate");
		clearTimeout(animBool);
		animBool = setTimeout(function(){
			$(".example").removeClass("animate");
		},400);
	});
	for(i=0;i<document.getElementsByClassName("filter").length;i++){
		$(".filter-"+(i+1)).on("click",function(){
			$(".example").css("filter",$(this).attr("data-fil"));
		})
	};
	$(".filter-1").on("click",function(){
		v2=v4=v5=v6=v8=0;
		v3 = 100;
		v1 = 140;
		v7 = 100;
		styleExample();
		addValues();
	});
	$(".filter-2").on("click",function(){
		v2=v4=v5=v6=v8=0;
		v7 = 160;
		v3 = 110;
		v1 = 100;
		styleExample();
		addValues();
	});
	$(".filter-3").on("click",function(){
		v2=v4=v5=0;
		v3 = 120;
		v6 = 5;
		v7 = 165;
		v8 = 20;
		styleExample();
		addValues();
	});
	$(".filter-4").on("click",function(){
		v2=v4=v6=v8=0;
		v3 = 110;
		v5 = 12;
		v7 = 165;
		v1 = 100;
		styleExample();
		addValues();
	});
	$(".filter-5").on("click",function(){
		v2=v4=v6=v8=0;
		v1 = v3 = 110;
		v5 = 340;
		v7 = 175;
		styleExample();
		addValues();
	});
	$(".filter-6").on("click",function(){
		v2=v4=v5=0;

		v3 = 140;
		v6 = 20;
		v7 = 150;
		v8 = 18;

		v1 = 100;
		styleExample();
		addValues();
	});
	$(".filter-7").on("click",function(){
		v2=v8=0;
		v5 = 30;
		v4 = 30;
		v6 = 8;
		v1 = v3 = v7 = 100;
		styleExample();
		addValues();
	});
	$(".filter-8").on("click",function(){
		v2=v4=v5=0;
		v1 = 140;
		v3 = 150;
		v6 = 18;
		v7 = 190;
		v8 = 25;
		styleExample();
		addValues();
	});
	$(".filter-9").on("click",function(){
		v2=v5=v6=v8=0;
		v3 = 110;
		v4 = 100;
		v1 = v7 = 100;
		styleExample();
		addValues();
	});
	$(".filter-10").on("click",function(){
		v2=v5=v8=0;
		v1 = 120;
		v4 = 100;
		v6 = 12;
		v3 = v7 = 100;
		styleExample();
		addValues();
	});
	$(".filter-11").on("click",function(){
		v2=v5=v8=0;
		v1 = 125;
		v4 = 80;
		v6 = 7;
		v7 = 130;
		v3 = 100;
		styleExample();
		addValues();
	});
	$(".filter-12").on("click",function(){
		v2=v5=v8=0;
		v1 = v3 = 80;
		v7 = v4 = v6 = 100;
		styleExample();
		addValues();
	});

	// $(".clear").on("mousedown",function(){
	// 	$(this).addClass("pressed");
	// 	$(".example").addClass("animate");
	// 	clearTimeout(animBool);
	// 	animBool = setTimeout(function(){
	// 		$(".example").removeClass("animate");
	// 	},400);
	// });

	// $(".clear-filter").on("mouseup",function(){
	// 	$(this).removeClass("pressed");
	// 	if (dbl1&&dbl2&&dbl3&&dbl4&&dbl5&&dbl6&dbl7&dbl8){
	// 		v1=dbl1;v2=dbl2;v3=dbl3;v4=dbl4;v5=dbl5;v6=dbl6;v7=dbl7;v8=dbl8;
	// 		styleExample();
	// 		addValues();
	// 	};
	// });

	var timeoutCopied,copy;
	$(".copy").on("mousedown",function(){
		$(this).addClass("pressed");
		$(".copied").addClass("active");
	});
	$(".copy").on("mouseup",function(){
		copy="";
		for (var i = 0; i < document.getElementsByClassName('out__row').length; i++) {
			$(".out__row").eq(i).hasClass("out__tab") ?
			copy+="\t" : true;
			i < document.getElementsByClassName('out__row').length - 1 ?
			copy += $('.out__row').eq(i).text()+"\n" :
			copy += $('.out__row').eq(i).text();
		};
		navigator.clipboard.writeText(copy)
		clearTimeout(timeoutCopied);
		timeoutCopied = setTimeout(function(){
			$(".copied").removeClass("active");
		},1500);
		$(this).removeClass("pressed");
	});

	function animate(){
		$(".example").addClass("animate");
		clearTimeout(animBool);
		animBool = setTimeout(function(){
			$(".example").removeClass("animate");
		},400);
	};
	$(".in6").contextmenu(function(){v6=0;$(this).val("0");});
	$(".in7").contextmenu(function(){v7=0;$(this).val("0");});
	$(".in8").contextmenu(function(){v8=0;$(this).val("0");});
	$(".change-row__input_range").contextmenu(function(e){
		e.preventDefault();
		styleExample();
		animate();
	});
	
	$("._blank").attr("target","_blank");
	$("._blank").removeClass("_blank");
});