// JavaScript Document// JavaScript Document// JavaScript Document
$( document ).ready(function() {
var serviceId = '';
 
	/**
	 * remove the attributes and classes from collapsible navbar when the window is resized
	 */
	$( window ).on( 'resize', _.debounce( function () {
		if ( Modernizr.mq( '(min-width: 992px)' ) ) {
			$( '#buildpress-navbar-collapse' )
				.removeAttr( 'style' )
				.removeClass( 'in' );  
		} 
	}, 500 ) ); 


	$( '[data-toggle="tooltip"]' ).tooltip();



    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        theme: 'pp_default',
		hook: 'data-rel',
		social_tools: ''
    });


$('.locater').hover(
  function(){
      $('.map').css({'background': "url(/content/dam/emitra/images/map_hover.png) no-repeat"});
	  $('.map').css({'background-position': "center"})
 },
  function(){
      $('.map').css({'background': "url(/content/dam/emitra/images/map.png) no-repeat"});
	  $('.map').css({'background-position': "center"})
  }
);
/* ---------------------------------------------------
	Isotope Portfolio and Blog
-------------------------------------------------- */

/*-------------------------------------------------*/
	/* =  portfolio isotope
	/*-------------------------------------------------*/

	var winDow = $(window);
		// Needed variables
		var $container=$('.projects-container');
		var $filter=$('.filter');

		try{
			$container.imagesLoaded( function(){
				$container.show();
				$container.isotope({
					filter:'*',
					itemSelector: '.project-post',
					layoutMode:'masonry',
					animationOptions:{
						duration:750,
						easing:'linear'
					}
				});
			});
		} catch(err) {
		}

		winDow.bind('resize', function(){
			var selector = $filter.find('li.active a').attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {
			}
			return false;
		});
		
		// Isotope Filter 
		$filter.find('li').click(function(){
			var selector = $(this).find('a').attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					 itemSelector: '.project-post',
					
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,

					}
				});
			} catch(err) {

			}
			return false;
		});
		$('.filter li').click(function(){
			$('.filter li').removeClass('active');
			$(this).addClass('active');
		});
		 $('.filter a').click(function(){
			$('.filter li').removeClass('active');
			$(this).parent().addClass('active');
		});
		
		
} 
);

$(function(){

var appendthis =  ("<div class='modal-overlay js-modal-close'></div>");

	$('a[data-modal-id]').click(function(e) {
		e.preventDefault();
    $("body").append(appendthis);
    $(".modal-overlay").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
		var modalBox = $(this).attr('data-modal-id');
		$('#'+modalBox).fadeIn($(this).data());
	});  
  

$(".js-modal-close, .modal-overlay").click(function() {
    $(".modal-box, .modal-overlay").fadeOut(500, function() {
        $(".modal-overlay").remove();
    });
 
});
 
$(window).resize(function() {
    $(".modal-box").css({
        top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
        left: ($(window).width() - $(".modal-box").outerWidth()) / 2
    });
});
 
$(window).resize();

});

///////////////////////

jQuery(function($) {
    var originalSize = $('p').css('font-size');
    $(".resetMe").click(function () {
        $('p').css('font-size', '');
		return false;

    });


    $(".increase").click(function () {
		
        curSize= parseInt($('p').css('font-size')) + 2;
  if(curSize<=20)

      $('p').css('font-size', curSize);
  $('td').css('font-size', curSize);

    });


    $(".decrease").click(function () {
       curSize= parseInt($('p').css('font-size')) - 2;
  if(curSize>=8)
      $('p').css('font-size', curSize);
  $('td').css('font-size', curSize);

    });

});



////////////////

function switch_style(title) {
	//alert("hello");
    var i, a, main;
    for (i = 0; (a = document.getElementsByTagName("link")[i]) ; i++) {
        if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
            a.disabled = true;
            if (a.getAttribute("title") == title) a.disabled = false;
        }
    }
}

function getActiveStyleSheet() {
    var i, a;
    for (i = 0; (a = document.getElementsByTagName("link")[i]) ; i++) {
        if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
    }
    return null;
}

function getPreferredStyleSheet() {
    var i, a;
    for (i = 0; (a = document.getElementsByTagName("link")[i]) ; i++) {
        if (a.getAttribute("rel").indexOf("style") != -1
           && a.getAttribute("rel").indexOf("alt") == -1
           && a.getAttribute("title")
           ) return a.getAttribute("title");
    }
    return null;
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

window.onload = function (e) {
    var cookie = readCookie("style");
    var title = cookie ? cookie : getPreferredStyleSheet();
    switch_style(title);
}

window.onunload = function (e) {
    var title = getActiveStyleSheet();
    createCookie("style", title, 365);
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
switch_style(title);	

/////////////////////////////////////////////////

function showhide()
     {
           var div = document.getElementById("newpost");
		   
    if (div.style.display !== "block") {
        div.style.display = "block";
        $('#hide_menu a').addClass('up')
        window.scrollBy(0, 300);
    }
    else {
        div.style.display = "none";
        $('#hide_menu a').removeClass('up');
    }
	

     }
	 
function tophide()
     {
           var div = document.getElementById("toptool");
		   
    if (div.style.display !== "block") {
        div.style.display = "block";
    }
    else {
        div.style.display = "none";
    }


     }	 
	 
	$(document).ready(function() {









// Webservice



$('.isrulid:eq(0)').prop('checked',true);



			$('#slider1').tinycarousel();
//setTimeout(counter, 10000);
function counter(){

$('.digital').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: parseInt($(this).text())
    }, {
        duration: 4000,
        easing: 'swing', 
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
}



 										 $.ajax({
											url : 'http://reportsemitraapp.rajasthan.gov.in/emitraReportsRepository/getPublicDashBoardSummaryaem',	
                                            type : 'POST',
											data : {P_InputStrParamFirst :0},
											success : function(data) {
												//var ab = JSON.stringify("dtaaa--abhay---"+data)
                                           // console.log(ab);
$(data.transactionCountList).each(function(key,value){ 
$('.transaction').html(value.TOT_NO_TRANSACTION);
$('.totalKiosk').html(value.TOTAL_KIOSK);
$('.workingtoday').html(value.TOTAL_ENTITY_WORKING_TODAY);
$('.counttoday').html(value.TRANSACTION_COUNT_TODAY);

$('.thistransaction').html(value.CURR_MON_TRANS);

 });

	 									  	counter();

											},
                                            error : function(data) {
                                            	//alert('error xml');
												//console.log('error data'+JSON.stringify(data));

											}

										});

var DISTRICT=1;
var TEHSIL ='';
var MUNCIPALITY ='';
var WARD = '';
var VILLAGE = '';
var GRAMPANCHAYT = '';
var PANCHAYATSAMITI = '';
var RURAL = $('.isrulid:checked').val();
	


        								function kioskList(DISTRICT,TEHSIL,MUNCIPALITY,WARD,VILLAGE,GRAMPANCHAYT,PANCHAYATSAMITI,RURAL)
                                        {
										
											
											console.log('TTTT--'+'DISTRICT='+DISTRICT+ '|TEHSIL=' + TEHSIL + '|MUNCIPALITY='+ MUNCIPALITY + '| WARD =' + WARD  + '| VILLAGE =' + VILLAGE  + '| GRAMPANCHAYT =' +  GRAMPANCHAYT   + '| PANCHAYATSAMITI =' +   PANCHAYATSAMITI + '| RURAL =' + RURAL);


if($('.isrulid:checked').val()=='N' )
{
RURAL = 'N';
PANCHAYATSAMITI ='false';
GRAMPANCHAYT ='false';		
}
else
{
RURAL = 'Y';
WARD ='false';
MUNCIPALITY ='false';	
}



if ($('.WARD').is(":visible")==true && $('#WARD').val()==null)
{
WARD ='false';	
}

if ($('.GRAMPANCHAYAT').is(":visible")==true && $('#GRAMPANCHAYAT').val()==null)
{
GRAMPANCHAYT ='false';	
}

var pinflag='';
var addflag='';
if($('#Searchby').val()=='1')
{
pinflag='true';
addflag='false';	
	
}
else
{
pinflag='false';
addflag='true';	
}
$('#kioskData').html('');
showLoadingPopup();

console.log('DISTRICT='+DISTRICT+ '|TEHSIL=' + TEHSIL + '|MUNCIPALITY='+ MUNCIPALITY + '| WARD =' + WARD  + '| VILLAGE =' + VILLAGE  + '| GRAMPANCHAYT =' +  GRAMPANCHAYT   + '| PANCHAYATSAMITI =' +   PANCHAYATSAMITI + '| RURAL =' + RURAL);
										 $.ajax({

											url : 'http://reportsemitraapp.rajasthan.gov.in/emitraReportsRepository/mgetLocationKioskDistrictDetailWiseMobile',	
                                            type : 'POST',
                                             data :{isRural:RURAL,district:DISTRICT,ward:WARD,muncipality:MUNCIPALITY,panchayatSamiti:PANCHAYATSAMITI,gramPanchayat:GRAMPANCHAYT,addressType:'PROPOSED',inDetail:'Y',pincodeFlag:pinflag,pincode:$('#enterValue').val(),addressFlag:addflag,addressSearch:$('#enterValue').val()},
											 success : function(data) {
                                                console.log('kisokdata-'+JSON.stringify(data)); 
                                                $('#kioskData').html('').empty();
												
												var kisokdatajson = JSON.parse(data);
												 console.log(kisokdatajson.length); 
												 $('#kioskDataln').html(kisokdatajson.length);
												
                                                if(kisokdatajson == 0)
                                                {
												$('#kioskData').append("<div class='alert alert-danger text-center' style='color: red;'><strong>Info!</strong> Data Not Available. </div>");
                                                }
                                                else
                                                {
var Address = 'N/A';
var category = 'N/A';
var email = 'N/A';
var phoneNumber1 = 'N/A';
var phoneNumber2 = 'N/A';
var vendorName = 'N/A';
var district = 'N/A';

 $(kisokdatajson).each(function(key,value){ 

 
 
 
 if(value.Address!='null' || value.Address!= null)
 { 
Address = value.Address;
 }
 
if(value.email!='null' || value.email!= null)
 { 
email = value.email;
 }
 
 if(value.phoneNumber1!='null' || value.phoneNumber1!= null)
 { 
phoneNumber1 = value.phoneNumber1;
 }
 
if(value.phoneNumber2!='null' || value.phoneNumber2!= null)
 { 
phoneNumber2 = value.phoneNumber2;
 }
 
 if(value.vendorName!='null' || value.vendorName!= null)
 { 
vendorName = value.vendorName;
 }
 
if(value.district!='null' || value.district!= null)
 { 
district = value.district;
 }
 
if(value.category == "1")
 { 
category = "<span style='color:#006900!important;'>A+</span>";
 }
 
 if(value.category == "2")
 { 
category = "<span style='color:#32CD32!important;'>A</span>";
 }
 
  if(value.category == "3")
 { 
category = "<span style='color:#333300!important;'>B+</span>";
 }
 
 if(value.category == "4")
 { 
category = "<span style='color:#CCCC00!important;'>B</span>";
 }
 
  if(value.category == "5")
 { 
category = "<span style='color:#FF0000!important;'>C</span>";
 }
 
if(value.category == "6")
 { 
category = "<span style='color:#FF0000!important;'>C</span>";
 }
 

 
 
 
 //$('#kioskData').append("<div class='row' style='border-bottom: 1px solid #C5C5C5 !important;'><div class='col-sm-12'><h4>"+vendorName+"</h4><p> <i class='fa fa-map-home'></i> "+Address+" </p><p><i class='fa fa-envelope-o'></i> "+email +"</p></p><i class='fa fa-mobile'></i> "+phoneNumber1+" </p><p> Category : "+category+" </p></div></div>");
 


$('#kioskData').append("<div class='row' style='border-bottom: 1px solid #C5C5C5 !important;'><div class='col-sm-12'><h4>"+vendorName+"</h4><p> <i class='fa fa-map-home'></i> "+Address+" </p><p> Category : "+category+" </p></div></div>");

 });
 }

hideLoadingPopup();
											},
                                            error : function(data) {
                                            	//console.log('error 99xml');


											}

										});
								}


										
										function GetLocationData(idno,elename){
										showLoadingPopup();
//console.log('elename--'+idno,elename);

                                            $.ajax({

                                            url : 'http://reportsemitraapp.rajasthan.gov.in/emitraReportsRepository/getKioskLocationWiseDetail',	
                                            type : 'POST',
                                            data :{ID:idno,DDLNAME:elename},
											success : function(data) {


var htmldata = '';
//console.log("abhayiiii7777777777---"+JSON.stringify(data.KISOK_DETAIL));
htmldata += "<option value='' selected disabled>SELECT "+elename+"</option>";
 $(data.KISOK_DETAIL).each(function(first,second){
 htmldata += "<option value="+second.KEY+">"+second.VALUE+"</option>";
 });

$('#'+elename).html('').append(htmldata);

hideLoadingPopup();

											},
                                            error : function(data) {
                                            	//console.log('Abhay error');
hideLoadingPopup();

											}

										});




								}

								
								
								
	$(document).on("change","#DISTRICT",function() {
	
$('#MUNICIPALITY').empty();  
$('#WARD').empty();   
$('#PANCHAYATSAMITI').empty();   
$('#GRAMPANCHAYAT').empty();  
	
GetLocationData($('#DISTRICT').val(),'MUNICIPALITY'); 
GetLocationData($('#DISTRICT').val(),'PANCHAYATSAMITI'); 
});	


$(document).on("click",".isrulid",function() {



if($(this).val()=='N')
{
$('.MUNICIPALITY').show();  
$('.WARD').show();  
$('.PANCHAYATSAMITI').hide();  
$('.GRAMPANCHAYAT').hide(); 
$('#WARD').empty(); 
$('#GRAMPANCHAYAT').empty();    

}
else
{
$('.MUNICIPALITY').hide();  
$('.WARD').hide();  
$('.PANCHAYATSAMITI').show();  
$('.GRAMPANCHAYAT').show();  
$('#WARD').empty(); 
$('#GRAMPANCHAYAT').empty();  

}


});



$(document).on("change",".kisokchange",function() {
//alert($(this).attr('fid'));
GetLocationData($(this).val(),$(this).attr('fid'));
});


$(document).on("change",".kisokchangeDirst",function() {
GetLocationData($('#DISTRICT').val(),$(this).attr('fid')); 
});






$(document).on("change","#GRAMPANCHAYAT",function() {

searchKioskData();

});


$(document).on("change","#WARD",function() {

searchKioskData();

});


$(document).on("click","#searchKioskData",function() {

searchKioskData();

});






function searchKioskData()
{
	
	
	if($('#DISTRICT').val()==null )
{
alert('Please Select District.');
return false;
}
else if($('.MUNICIPALITY').is(":visible")==true && $('#MUNICIPALITY').val()==null )
{
alert('Please Select Municipality.');
return false;
}
else if ($('.PANCHAYATSAMITI').is(":visible")==true && $('#PANCHAYATSAMITI').val()==null)
{
alert('Please Select Panchayat Samiti.');	
return false;
}


	
kioskList($('#DISTRICT').val(),$('#TEHSIL').val(),$('#MUNICIPALITY').val(),$('#WARD').val(),$('#VILLAGE').val(),$('#GRAMPANCHAYAT').val(),$('#PANCHAYATSAMITI').val(),$("input[name='isRural']:checked").val());
	
}






 
$(document).on("click","#backbutton",function() {
$('#dataResponse').hide(); 
$('#datatab').html(''); 
$('.activform').show();
});


function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var response =  getParameterByName('response');

if(response != null || response != 'undefined' || response != undefined )
{
//alert('response--'+response);	
toBeDecrypt(response);
}






$(document).on("click","#paybillbutton",function() {

var TransactionData = localStorage.getItem("TransactionData");

   	TransactionData = $.parseJSON(TransactionData);

	var ServiceName = TransactionData.ServiceName;
    var officeID = TransactionData.officeID;
    var BillAmount = TransactionData.BillAmount;
    var ConsumerName = TransactionData.ConsumerName;
    var consumerKeysValues = TransactionData.consumerKeysValues;
    var partPaymentAllow = TransactionData.partPaymentAllow;
    var partPaymentType = TransactionData.partPaymentType;
    var lookUpId = TransactionData.lookUpId;
    var billpaydata = 0;



    //alert('BillAmount'+BillAmount);
//window.open("https://emitraapp.rajasthan.gov.in/emitraApps/emitraAggregator?encData=5FZqHt3nB6K1ScJrGZUUdF5DR33nZ9qg9taL6nA1pjTmfZS5ki2VLKVTpzz4qqPkUOEcCvL+vQRZc1hsZnax6xQ4Opm3UvFswQhzGnTI7WM/rMpAOcnevZzF7dhDuWgcpET+P274uLr7DaW/71D17yXMFGqzQYW16R7NREFLfEQoHvjlc/u43vpbuNeE9gSHduiSAZ6X82xCutghRe48KPGDzaC7LYGySw/439Y8qamNDC4WyKiIvbOlcWv/MoimAvxqEfg5tf68RBGM6sTZa/mZhijVeyTwRsnrWBo9fhXkvOuY1V1RK0Xc6mf/CzB3UXEB+yDzmD8Lgk6T9dOVgy8+EgXZTk4HyPsAxTGK4NA75oMwbqemKxU66RHyxPTdBA9zZXyStCL5FdRWJNTjn6jn79LdijIlhLeUf/wlaq2Ci5HRVNO3Xwl4Ccn8vi3r1vPMQP0YIvoxD/cQ/OXkSlKtIjNHAUHj5t5YaDsQvMtrxaIBjKClXc54zMngwaUYqHiGhLtZ2oXduhmvkEJsVmDuS7iKtt6fdF1mHuNOkTp77j25LNM7jPDEgId8BAX0tyEkPQUsnLs3o5AbCtQOLqRCvG+HGf1GKFNnL435QHxjz8PEprYIeFDZu0FJpX9g&MID=SSOPORTAL", "_blank");


//{data:[{'ServiceID':'1220','ConsumerKey':'7023003581-100032639411','ConsumerName':'SANJAY SAINI','BillAmount':'1','MerchantTransNo':'SSOTESTKIOSKMobile1311941','EventType':'102','SsoId':'SSOTESTKIOSK','EmitraId':'1000072531','EntityId':'184','EntityTypeId':'8','SenderEntityId':'','ReceiverEntityId':'','OfficeId':'N','ServiceName':'MobileName','LookUpId':'4915041','MobileNumber':'8909899089','EmailId':'ssotestkiosk@gmail.com','MerchantCode':'F1234','deviceId':'null','flagLoggedIn':'true'}]}
var serviceId = localStorage.getItem('serviceId');

if(serviceId == '1223')
{
billpaydata ="{data:[{'ServiceID':'"+serviceId+"','ConsumerKey':'"+consumerKeysValues+"','ConsumerName':'"+ConsumerName+"','BillAmount':'"+BillAmount+"','MerchantTransNo':'"+Math.round(Math.random()*9999999999)+"','EventType':'102','SsoId':'CITIZENOFRAJASTHAN','EmitraId':'','EntityId':'184','EntityTypeId':'8','SenderEntityId':'','ReceiverEntityId':'','OfficeId':'"+officeID+"','ServiceName':'"+ServiceName+"','LookUpId':'"+lookUpId+"','MobileNumber':'"+$('#mobNo').val()+"','EmailId':'"+$('#emailId').val()+"','MerchantCodeId':'EMITRAPORTAL','deviceId':'null',flagLoggedIn:'false'}]}";

}
else if(serviceId == '2354')  
{
billpaydata ="{data:[{'ServiceID':'"+serviceId+"','ConsumerKey':'"+consumerKeysValues+"','ConsumerName':'"+ConsumerName+"','BillAmount':'"+BillAmount+"','MerchantTransNo':'"+Math.round(Math.random()*9999999999)+"','EventType':'102','SsoId':'CITIZENOFRAJASTHAN','EmitraId':'','EntityId':'184','EntityTypeId':'8','SenderEntityId':'','ReceiverEntityId':'','OfficeId':'"+officeID+"','ServiceName':'"+ServiceName+"','LookUpId':'"+lookUpId+"','MobileNumber':'"+$('#mobNophed').val()+"','EmailId':'"+$('#emailId').val()+"','MerchantCodeId':'EMITRAPORTAL','deviceId':'null',flagLoggedIn:'false'}]}";
}
else
{ 
billpaydata ="{data:[{'ServiceID':'"+serviceId+"','ConsumerKey':'"+consumerKeysValues+"','ConsumerName':'"+ConsumerName+"','BillAmount':'"+BillAmount+"','MerchantTransNo':'"+Math.round(Math.random()*9999999999)+"','EventType':'102','SsoId':'CITIZENOFRAJASTHAN','EmitraId':'','EntityId':'184','EntityTypeId':'8','SenderEntityId':'','ReceiverEntityId':'','OfficeId':'"+officeID+"','ServiceName':'"+ServiceName+"','LookUpId':'"+lookUpId+"','MobileNumber':'"+$('#mobNo').val()+"','EmailId':'"+$('#emailId').val()+"','MerchantCodeId':'EMITRAPORTAL','deviceId':'null',flagLoggedIn:'false'}]}";

} 


//alert(billpaydata);







$.ajax({

                                            url : 'http://reportsemitraapp.rajasthan.gov.in/emitraReportsRepository/tripleDesEncryption',	
                                            type : 'POST',
   											 data : { toBeEncrypt:billpaydata},
											success : function(data) {

											//alert('data13234'+data);
                                               // console.log('000---'+data.responseText);


											},
                                            error : function(data) {
                                            	//console.log('toBeEncrypt--'+data.responseText);



window.location.replace("https://emitraapp.rajasthan.gov.in/emitraApps/emitraAggregator?encData="+data.responseText+"&MID=EMITRAPORTAL");



                                               // toBeDecrypt(data.responseText);
											}

										}); 






});



function toBeDecrypt(toBeDecryptData)
        {


$.ajax({

                                            url : 'http://reportsemitraapp.rajasthan.gov.in/emitraReportsRepository/tripleDesDecryption',	
                                            type : 'POST',
   											 data : { toBeDecrypt:toBeDecryptData},
											success : function(data) {

											//alert('data13234'+data);
                                               // console.log('toBeDecryptData000---'+data.responseText);


											},
                                            error : function(datatext) {
                                            	//console.log('toBeDecryptData--uuu'+datatext.responseText);
var res = JSON.stringify(datatext.responseText);






	  var res = res.replace("{data:[","");


	   var finres = res.replace("}]","");


	   var finresjson = finres.replace(/'/g,'"');

var result = finresjson.substring(1, finresjson.length-1);

//console.log(result);
var jsondatatxt = jQuery.parseJSON(result);
console.log('for chetan sir --jsondatatxt.responseText.data.status - '+jsondatatxt.status); 

 $('#serviceId').css('display','block');
           $('#dataResponse').show();
		   $('#datatab').show();
           $('#ElectricityBill,#paybillbutton,#backbutton').hide();

          $('#serviceId header a').hide();
		   $( '<a href="http://emitra.rajasthan.gov.in/content/emitra/en/home.html" class="btn btn-default col-sm-offset-5">Close</a>' ).insertAfter( "#datatab" );


     	 if(jsondatatxt.status == '200')
    	 {
			 
		var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = dd + '-' + mm + '-' + yyyy;
	 
			 
			 
		$('#datatab').html('').append('<tr><td>Payment Status</td><td>'+jsondatatxt.msg+'</td></tr> <tr><td>Receipt No</td><td>'+jsondatatxt.rcptNo+'</td></tr> <tr><td>Payment Mode</td><td>'+jsondatatxt.payMode+'</td></tr> <tr><td>Bank Refrence No</td><td>'+jsondatatxt.bankRefNo+'</td></tr>  <tr><td>Request Id</td><td>'+jsondatatxt.reqId+'</td></tr>    <tr><td colspan="2" class="text-right"><a target="_blank" href="https://emitraapp.rajasthan.gov.in/emitrashared/document/RECEIPT_ONLY/'+today+'/RECEIPTNO_'+jsondatatxt.rcptNo+'.pdf" >Download Receipt</a></td></tr> ');
		}
       else
       {
		$('#datatab').html('').append('<tr><td>Payment Status</td><td>'+jsondatatxt.msg+'</td></tr><tr><td>Request Id</td><td>'+jsondatatxt.reqId+'</td></tr>');
          


          



       }


											}

										}); 




        }  


// Pay Bills







$(document).on("click","#submitFormApi ",function() {



if(localStorage.getItem('serviceId')== '1223'){    

if($('#knoNo').val()== '') 
{
alert('Enter KNO Number')
}
else if($('#mobNo').val()== '' || $('#mobNo').val().length < 10)
{
alert('Enter Mobile Number')
}
else
{
AESENCRYPT();

}
}


else if((localStorage.getItem('serviceId')== '2354'))
{


if($('#eMitraKeythree').val()== '')
{
alert('Enter Emitra CID Code');
}
else if($('#mobNophed').val()== '' || $('#mobNophed').val().length < 10)
{
alert('Enter valid Mobile Number');
}
else
{
AESENCRYPT();
}

}
else if((localStorage.getItem('serviceId') == 0000 ||  localStorage.getItem('serviceId') == 1221 || localStorage.getItem('serviceId') == 2575 || localStorage.getItem('serviceId') == 1214 || localStorage.getItem('serviceId') == 1218 || localStorage.getItem('serviceId') == 1219 || localStorage.getItem('serviceId') == 1220 ||  localStorage.getItem('serviceId') == 1216   ))
{

serviceId = $('#ServiceBillId').val(); 
localStorage.setItem("serviceId", serviceId);



if($('#mobNorech').val()== '' || $('#mobNorech').val().length < 10)
{
alert('Enter valid Mobile Number');
}
else if( localStorage.getItem('serviceId') == 2575 && $('#mobtyp').val()== null)
{
alert('Select Mobile Number Type');
}
else
{
AESENCRYPT();
}



}    





});


function GetDataCal(Incdata){
$.ajax({

                                            url : 'http://reportsemitraapp.rajasthan.gov.in/emitraReportsRepository/getFetchDetailsEncryptedBySso',	
                                            type : 'POST',
                                            datatype : 'text',  
                                            data : {encData:Incdata},
											success : function(data) {
//console.log('response333333'+data);



						                   // DecryptJson();

                                            },
                                             error : function(data) {


                                            // console.log('PAY BILL error--'+JSON.stringify(data));
                                                 AESDECRYPT(data.responseText);


                                            }
                                            });


}









        function AESDECRYPT(decdata){

showLoadingPopup();


										$.ajax({

                                            url : 'http://reportsemitraapp.rajasthan.gov.in/emitraReportsRepository/mDecryptAESOnlinePayment',	
                                            type : 'POST',
                                           // datatype : 'text',  
                                            data : {xmlString:decdata},
											success : function(data) {

                                               // console.log('56565656565665656DecryptJson-------'+data);

						                   // DecryptJson();
                                              //GetDataCal(data);




var dataxml = $.parseXML(data); 


                                            //   alert( 'encryptMobile==='+$(dataxml).find('encryptMobile').find('data').text());
						                   // DecryptJson();
                                                fetchDetails($(dataxml).find('decryptMobile').find('data').text());


                                            },
                                             error : function(data) {
                                            // alert('--------error'+JSON.stringify(data));

                                            }
                                            });


        }

        function AESENCRYPT(){
var consumerKeysValdata = 0;;

var serviceId = localStorage.getItem('serviceId');

if(serviceId == '1223')
{
consumerKeysValdata = $('#knoNo').val();
}
else if(serviceId == '2575')  
{
var mobNorech = $('#mobNorech').val();
consumerKeysValdata = mobNorech+'-'+mobNorech+'-'+$('#mobtyp').val();
}
else if(serviceId == '2354')  
{
consumerKeysValdata = $('#eMitraKeythree').val();
}
else
{
consumerKeysValdata = $('#mobNorech').val();
}    


;




            var EnrData = '{"SRVID":"'+serviceId+'","searchKey":"'+consumerKeysValdata+'","SSOID":"CITIZENOFRAJASTHAN"}';

console.log('EnrData=='+EnrData);
										$.ajax({

                                            url : 'http://reportsemitraapp.rajasthan.gov.in/emitraReportsRepository/mEncryptAESOnlinePayment',	
                                            type : 'POST',
                                           // datatype : 'text',  
                                            data : {xmlString:EnrData},
											success : function(data) {

											var dataxml = $.parseXML(data); 


                                            // alert( 'encryptMobile==='+$(dataxml).find('encryptMobile').find('data').text());
						                   // DecryptJson();
										 //  console.log($(dataxml).find('encryptMobile').find('data').text());
                                                GetDataCal($(dataxml).find('encryptMobile').find('data').text());

                                            },
                                             error : function(data) {
                                             //alert('--------error'+JSON.stringify(data));

                                            }
                                            });


        }











function fetchDetails(data)

{
    var checkData = 1;
$('#PHEDBill').hide();
$('#datatab').html('');
var JsonData = data;
if(JsonData.length != 0)
{
JsonData = $.parseJSON(JsonData);


    $(JsonData.FetchDetails.BillDetails).each(function(keydata,valuedata){

        var parmadata = $.trim(valuedata.LableName)

        if(parmadata == 'Message' || parmadata == 'BinderNo' || parmadata == 'OfficeCode' || parmadata == 'PaymentType' ){
//$('#datatab').append('<tr><td>'+valuedata.LableName+'</td><td>'+valuedata.LableValue+'</td></tr>');
        }
        else
        {
            $('#datatab').append('<tr><td>'+valuedata.LableName+'</td><td>'+unescape(valuedata.LableValue)+'</td></tr>');
        }

});
}

hideLoadingPopup();

$('#PayWithoutLogin,#ElectricityBill,#MobBill').hide();
$('#dataResponse').show();
    $('#datatab').show(); 

if(JsonData.FetchDetails.BillDetails.length == 0 )
{
$('#paybillbutton').hide();
$('#datatab').append('<h4 class="text-center">Data Not Available </h4>');
}
if(JsonData.length == 0)
{
$('#paybillbutton').hide();
$('#datatab').append('<h4 class="text-center">Data Not Available </h4>');
}

if(JsonData.FetchDetails.BillDetails.length == 1)
{
$('#paybillbutton').hide();
}
else
{
$('#paybillbutton').show();
} 


localStorage.setItem("TransactionData", JSON.stringify(JsonData.FetchDetails.TransactionDetails)); 

}


});	









$(document).on("click",".servicebtn",function() {
autotrigger($(this).text(),$(this).attr('serviceId'));

});





function autotrigger(idtext,srvIDData)
{
$('#serviceId').css('display','block');
if(idtext == 'Electricity')
{
$('#ElectricityBill').show().addClass('activform');
$('#PHEDBill').hide().removeClass('activform');
$('#MobBill').hide().removeClass('activform');
$('#dataResponse').hide();

$('#datatab').html('');
serviceId = srvIDData; 
//alert(serviceId);
localStorage.setItem("serviceId", serviceId);
}

if(idtext == 'PHED')
{
$('#ElectricityBill').hide().removeClass('activform');
$('#PHEDBill').show().addClass('activform');
$('#MobBill').hide().removeClass('activform');

$('#dataResponse').hide();
$('#datatab').html('');
serviceId = srvIDData; 
localStorage.setItem("serviceId", serviceId);
//alert(serviceId);
}






if(idtext == 'Mobile Bill')
{
$('#ElectricityBill').hide().removeClass('activform');
 $('#PHEDBill').hide().removeClass('activform');
$('#MobBill').show().addClass('activform');

$('#dataResponse').hide();
$('#datatab').html('');
serviceId = srvIDData; 
localStorage.setItem("serviceId", serviceId);
}    

}


autocehckPopUp();
function autocehckPopUp(){
	
	var url = document.URL;
    parts = url.split("?");
	if(parts.length == 2 && (parts[parts.length-1].length) < 20){
    last_part = parts[parts.length-1];
	var A = $('#'+last_part).text();
	var B = $('#'+last_part).attr('serviceId');
	autotrigger(A,B);
	}
	
	
}

// Get Transaction Status Script Start

$(document).on("click","#GetRecNo",function() {

var receiptNumberVal = $('#receiptNumber').val();

$.ajax({ 
											url : 'http://reportsemitraapp.rajasthan.gov.in/emitraReportsRepository/mgetApplicationsStatusMobile',
                                          //  url : 'http://emitrauat.rajasthan.gov.in/webServicesRepositoryUat/mgetApplicationsStatusMobile',	
                                            type : 'POST',
                                            data : {receiptNumber:receiptNumberVal},
											success : function(dataVal) {
												
											if(dataVal.length == 2){
											$('#consumerData').html('<tr><td style="color: red;text-align: center;">Data Not Available</td></tr>');	
											}
											else
											{
												
												
                                                $('#consumerData').html(''); 
 var resData = dataVal.replace("[","");
 var dataVals = resData.replace("]","");    

//console.log(dataVals);

var dataVals =  $.parseJSON(dataVals);




if(dataVals.tranDate != '')
{
var arr = dataVals.tranDate.split("-");
var trandate = arr[2]+'/'+arr[1]+'/'+arr[0];
}

$('#consumerData').append('<tr><td>ConsumerName</td><td>'+dataVals.ConsumerName+'</td></tr>  <tr><td>Status</td><td>'+dataVals.status+'</td></tr> <tr><td>Receipt Number</td><td>'+dataVals.receiptNumber+'</td></tr> <tr><td>Transaction ID</td><td>'+dataVals.tokenNumber+'</td></tr> <tr><td>Transaction Date</td><td>'+trandate+'</td></tr> <tr><td>Service Name</td><td>'+dataVals.serviceName+'</td></tr> <tr><td>Payment Mode</td><td>'+dataVals.paymentMode+'</td></tr>  <tr><td>Total Amount</td><td>'+dataVals.totalAmount+'</td></tr>');

}

                                            },
                                             error : function(data) {
                                           //  console.log('-------- receiptNumberVal error'+JSON.stringify(data));

                                            }
                                            });



});









if(document.URL == 'http://emitra.rajasthan.gov.in/content/emitra/en/ServiceList.html')
{
getServList();
}





function getServList()
{




$.ajax({ 
											url : 'http://reportsemitraapp.rajasthan.gov.in/emitraReportsRepository/getServiceRevenueDetails',
                                          //  url : 'http://emitrauat.rajasthan.gov.in/webServicesRepositoryUat/mgetApplicationsStatusMobile',	
                                            type : 'POST',
   											data : {receiptNumber:''},
											success : function(dataVal) {
                                               //console.log('dataValserv---'+dataVal);

                                                $(dataVal.serviceCommDetailList).each(function(key,value){
                                                    //console.log('value.serviceName--'+value.serviceName);

								$('#servListData').append('<tr><td>'+(key+1)+'</td><td>'+value.serviceName+'</td><td>'+value.dept+'</td><td>'+value.serviceStartDate+'</td><td>'+value.kioskCommValue+'</td><td>'+value.citizenCalType+'</td></tr>');

                                                });





                                            },
                                             error : function(data) {
                                            // console.log('-------- servList error'+JSON.stringify(data));

                                            }
                                            });


}






if(document.URL == 'http://emitra.rajasthan.gov.in/content/emitra/en/Guideline.html')
{
 getServGuidlineData();
}



function getServGuidlineData()
{

$.ajax({ 
											url : 'https://emitraapp.rajasthan.gov.in/webServicesRepository/getGuidelineEformJSON',
                                          //  url : 'http://emitrauat.rajasthan.gov.in/webServicesRepositoryUat/mgetApplicationsStatusMobile',	
                                            type : 'POST',
   											data : {receiptNumber:''},
											success : function(dataVal) {
                                               console.log('ServiceGUID---'+dataVal);

                                                $(dataVal).each(function(key,value){
                                                    //console.log('value.serviceName--'+value.serviceName);

                                                    var EFORM = '';
													var GUIDELINE = '';
                                                    var titleeng = '';
                                                    var titlehindi = '';
                                                    var VideoGline = '';



													if(value.VIDEO_GUIDELINE == 'NA')
                                                    {
													VideoGline = 'NA'
                                                    }
                                                    else
                                                    {
													VideoGline = '<a class="btn-sm btn-success" href="'+value.VIDEO_GUIDELINE+'" target="_blank">Download</a>'
                                                    }




                                                    if(value.EFORM == 'NA')
                                                    {
													EFORM = 'NA'
                                                    }
                                                    else
                                                    {
													EFORM = '<a class="btn-sm btn-success" href="'+value.EFORM+'" target="_blank">Download</a>'
                                                    }



                                                    if(value.GUIDELINE == 'NA')
                                                    {
													GUIDELINE = 'NA' 
                                                    }
                                                    else 
                                                    {
													GUIDELINE = '<a class="btn-sm btn-success" href="'+value.GUIDELINE+'" target="_blank">Download</a>'
                                                    }

                                                    if(value.TITLE_ENG == 'NA')
                                                    {
													titleeng = 'NA' 
                                                    }
                                                    else
                                                    {
													titleeng = value.TITLE_ENG;
                                                    }

                                                     if(value.TITLE_HIN == 'NA')
                                                    {
													titlehindi = 'NA';
                                                    }
                                                    else
                                                    {
													titlehindi = value.TITLE_HIN;
                                                    }

                                                    str = value.SERVICE;


											$('#servgidelineData').append('<tr><td>'+(key+1)+'</td><td>'+value.DEPARTMENT+'</td><td >'+str+'</td> <td>'+titleeng.replace(/_/g, ' ')+' ('+titlehindi+')</td> <td> '+GUIDELINE+' </td> <td>'+EFORM+'</td> <td>'+VideoGline+'</td> <td>'+value.UPDATE_DATE+'</tr>');



                                            });



											$('#servgidelineDataTable').DataTable();

                                            },
                                             error : function(data) {
                                            // console.log('-------- servList error'+JSON.stringify(data));

                                            }
                                            });


}









// Get Service Token Result


// Get Transaction Status Script Start

$(document).on("click","#GettokenNo",function() {
var tokenNumberVal = $('#tokenNumber').val();

$.ajax({ 
											url : 'http://reportsemitraapp.rajasthan.gov.in/emitraReportsRepository/applicationVerification',
                                          //  url : 'http://emitrauat.rajasthan.gov.in/webServicesRepositoryUat/mgetApplicationsStatusMobile',	
                                            type : 'POST',
                                            data : {tokenNumber:tokenNumberVal, dataType:'APPDETAIL', loggedInUser:''},
											success : function(dataValData) {
	$('#consumertokenData').html('');		
	console.log(dataValData);
	
	var dataVal = JSON.parse(dataValData);	
	var strgdata = JSON.stringify(dataVal);						
		console.log(strgdata.length);									
if(strgdata.length == 27)
{
	
$('#consumertokenData').html('<tr><td style="color: red;text-align: center;">Data Not Available</td></tr>');	
												
}
else
{

$('#consumertokenData').append('<tr><td>Applicant Name</td><td>'+dataVal.transactionCountList[0].APPLICANT_NAME+'</td></tr>  <tr><td>Current Status</td><td>'+dataVal.transactionCountList[0].CURRENT_STATUS+'</td></tr> <tr><td>Valid From Date</td><td>'+dataVal.transactionCountList[0].ACTION_DATE+'</td></tr> <tr><td>Transaction ID</td><td>'+dataVal.transactionCountList[0].TOKEN_NO+'</td></tr>  <tr><td>Office</td><td>'+dataVal.transactionCountList[0].OFFICE+'</td></tr>');

}


// var resData = dataVal.replace("[","");
 //var dataVals = resData.replace("]","");    

//console.log(dataVals);
//var dataVals =  $.parseJSON(dataVals);

//console.log('dataVals==='+dataVals);


//if(dataVals.tranDate != '')
//{
//var arr = dataVals.tranDate.split("-");
//var trandate = arr[2]+'/'+arr[1]+'/'+arr[0];
//}

//$('#consumerData').append('<tr><td>ConsumerName</td><td>'+dataVals.ConsumerName+'</td></tr>  <tr><td>Status</td><td>'+dataVals.status+'</td></tr> <tr><td>Receipt Number</td><td>'+dataVals.receiptNumber+'</td></tr> <tr><td>Transaction ID</td><td>'+dataVals.tokenNumber+'</td></tr> <tr><td>Transaction Date</td><td>'+trandate+'</td></tr> <tr><td>Service Name</td><td>'+dataVals.serviceName+'</td></tr> <tr><td>Payment Mode</td><td>'+dataVals.paymentMode+'</td></tr>  <tr><td>Total Amount</td><td>'+dataVals.totalAmount+'</td></tr>');



                                            },
                                             error : function(data) {
                                            // console.log('-------- receiptNumberVal error'+JSON.stringify(data));

                                            }
                                            });



});



//$('.siteorigin-panels-stretch').hide();


$(document).on('click', '#accordion .panel-default', function (event) {


    $('#accordion .panel-default a').each(function(){

      if( $(this).attr('aria-expanded')=='true')
      {
$(this).find('i').replaceWith('<i class="fa fa-chevron-down"></i>');
      }
        else
        {
       $(this).find('i').replaceWith('<i class="fa fa-chevron-up"></i>');
        }

    });


   /*if($(this).find('i').hasClass('fa-chevron-down') == true)
   // {
//$(this).find('i').replaceWith('<i class="fa fa-chevron-up"></i>');
    //}
    else
    {
        $(this).find('i').replaceWith('<i class="fa fa-chevron-down"></i>');
    }
*/


}); 




 
		
 
 
	
 
 
		
 
	
 
		
 
 
 
		
 if(document.URL == 'http://emitra.rajasthan.gov.in/content/emitra/en/Reports.html')
{

getdeptdatafn()
$('#fromdate').val($.datepicker.formatDate('dd/mm/yy', new Date()));
$('#toDate').val($.datepicker.formatDate('dd/mm/yy', new Date()));  

}	




 function getdeptdatafn(){
     $('#deptcode').html('');
console.log('start department');
$.ajax({ 
						url : 'http://reportsemitraapp.rajasthan.gov.in/emitraReportsRepository/mgetDepartmentListAEM',
        				//url : 'https://emitraapp.rajasthan.gov.in/webServicesRepository/mgetDistrictSummaryDeptSerAEM',
                     	  type : 'POST',
                           data : {data:''},
							success : function(dataVal) {

                                var dataValdata = JSON.parse(dataVal);


 //console.log('-------- reports DepartmentId'+JSON.stringify(dataValdata));

  $('#deptcode').append('<option value="">ALL</option>');                     

 $(dataValdata).each(function(key,value){

 $('#deptcode').append('<option value="'+value.DepartmentId+'">'+value.DepartmentName+'</option>');


 }); 

	//	console.log('reports-------- success'+dataValdata);
                             },
                              error : function(dataVal) {

                             console.log('-------- reports DepartmentId'+JSON.stringify(dataVal));
							}
                             });
} 
	
 




$(document).on('change', '#deptcode', function (event) {
 $('#serviceName').html('');

$.ajax({ 
						url : 'http://reportsemitraapp.rajasthan.gov.in/emitraReportsRepository/mgetServiceListOnDeptValueAEM ',
        				//url : 'https://emitraapp.rajasthan.gov.in/webServicesRepository/mgetDistrictSummaryDeptSerAEM',
                     	  type : 'POST',
                           data : {deptId:$(this).val()},
							success : function(dataVal) {

                                var dataValdata = JSON.parse(dataVal);


 //console.log('-------- reports DepartmentId'+JSON.stringify(dataValdata));

 $('#serviceName').append('<option value="">ALL</option>');

 $(dataValdata).each(function(key,value){

 $('#serviceName').append('<option value="'+value.ServiceId+'">'+value.ServiceName+'</option>');


 }); 

	//	console.log('reports-------- success'+dataValdata);
                             },
                              error : function(dataVal) {

                             console.log('-------- reports DepartmentId'+JSON.stringify(dataVal));
							}
                             });






});

 




if(document.URL == 'http://emitra.rajasthan.gov.in/content/emitra/en/matrixreport.html')
{
$('#fromdate').val($.datepicker.formatDate('dd/mm/yy', new Date()));
$('#toDate').val($.datepicker.formatDate('dd/mm/yy', new Date()));  

}	




$(document).on('click', '#reportsdatabtnMatrix', function (e) {
	reportdatafnMatrix()
});





function reportdatafnMatrix(){
	
	$('#reportMatrixDataTr').html('').empty();
	$('#grandtotalfoot').html('').empty();
	$('.table-responsive div').remove();
	$('#reportMatrixData').html('').empty();
	
	$('#loadingPopUp').show();
	var Category = '';
    var flag = ''
	
	
	
	




    if($.datepicker.formatDate('dd/mm/yy', new Date())==$('#fromdate').val() && $.datepicker.formatDate('dd/mm/yy', new Date())==$('#toDate').val())
	{
	flag = 0;
	}
	else
	{
	flag = 1;	
	}
	
	
	if($('#Category').val()=='U')
	{
	Category = 'N';
	}
	else if($('#Category').val()=='R')
	{
	Category = 'Y';
	}

$.ajax({ 
						url : 'http://reportsemitraapp.rajasthan.gov.in/emitraReportsRepository/mgetDistrictServiceMatrixAEM',
        				//url : 'https://emitraapp.rajasthan.gov.in/webServicesRepository/mgetDistrictSummaryDeptSerAEM',
                     	  type : 'POST',
    data : {isRural:Category,districtId:$('#dccode').val(),fromDate:$('#fromdate').val(),toDate:$('#toDate').val(),flag:flag},
	success : function(dataVal) {
    var dataValdata = JSON.parse(dataVal);
console.log('dataValdata--'+dataVal); 
	
	$('#reportMatrixDataTr').append('<th>Service Name </th>');
	$('#grandtotalfoot').append('<th id="grndtxt">Grand Total</th>');
	
	$(dataValdata.data).each(function(index, element) {
		var dirsctid = element.DISTRICT_NAME_ENG ;
		dirsctidId = dirsctid.replace(/\s/g,'');
		
		var servname = element.SRV_NAME ;
		servnameid = servname.match(/\d+/g).join([]);
		

		
		if($('#'+dirsctidId).length==0 )
		{
        $('#reportMatrixDataTr').append('<th id="'+dirsctidId+'">'+element.DISTRICT_NAME_ENG+'</th>');
		 $('#grandtotalfoot').append('<th class="'+dirsctidId+' gto"></th>');
		
		}
		
		if($('#'+servnameid).length == 0 )
		{
		$('.table-responsive').append('<div style="display:none;" dirstSevId="'+servnameid+dirsctidId+'" DeptName="'+element.DEPT_NAME+'" toamnt="'+element.TOT_AMT+'" rcount="'+element.RCOUNT+'" class="servln" sid="'+servnameid+'">'+element.SRV_NAME+'</div');
		
		}
    });
	$('#reportMatrixDataTr').append('<th id="gt">Grand Total </th>');
	 $('#grandtotalfoot').append('<th class="tfoototal"></th>');
	
	
	$(dataValdata.data).each(function(index, element) {
		var dirsctid = element.DISTRICT_NAME_ENG ;
		dirsctidId = dirsctid.replace(/\s/g,'')
		if($('#'+dirsctidId).length==0 )
		{
        $('#reportMatrixDataTr').append('<th id="'+dirsctidId+'">'+element.DISTRICT_NAME_ENG+'</th>');
			
		
		
		}
    });
	
	

	var inrc = 0;
	$(dataValdata.data).each(function(index, element) {

		var servname = element.SRV_NAME ;

		servnameid = servname.match(/\d+/g).join([]);
			//console.log('findid---'+$("#"+ servnameid).length);	
		
		if( $('#'+servnameid).length == 0 )
		{
			//console.log('In-'+servnameid);
            $('#reportMatrixData').append('<tr id="'+servnameid+'"><td><span style="color:red; clear:both;">'+element.DEPT_NAME+'-</span>'+element.SRV_NAME+'-<span style="color:red;">('+(inrc+1)+')</span></td></tr>');
inrc++;
		}
    });
	
	
	
	
	$('#reportMatrixData tr').each(function(index, element) {
        var rowid = $(this).attr('id');
		
		
		$('#reportMatrixDataTr th').each(function(index, element) {
		if(index!=0)	
		{
		$('#'+rowid).append('<td class="td'+$(this).attr('id')+'" id="'+rowid+$(this).attr('id')+'">-</td>');
		}
		
    	});

    });
	
	
	$('.servln').each(function(index, element) {
        $('#'+$(this).attr('dirstsevid')).text($(this).attr('rcount'));
    });
	
	
	
	
	$('#reportMatrixDataTr th').each(function(index, element) {
        var rowid = $(this).attr('id');
		if(index!=0){
		var countr = 0;
		$('.td'+$(this).attr('id')).each(function(index, element) {
			if(isNaN($(this).text()) != true )
			{
			countr+=+parseInt($(this).text());	
			}
		
    	});
		
 	$('.'+rowid).text(countr);	
		}
		
    });

	
	
	
	
	
$('#loadingPopUp').hide(); 


                             },
                              error : function(dataVal) {
$('#loadingPopUp').hide();
                             console.log('-------- reports error'+JSON.stringify(dataVal));
							},complete: function(dataVal){
								
	$('#reportMatrixData tr').each(function(index, element) {
      
	  var thisd = $(this);
	  var count = 0;

	  $('td',this).each(function(index, element) {
     
		if(isNaN($(this).text()) != true )
			{
				  
			count+=+parseInt($(this).text());	
			}  
	   
		
    });  
	

	$(thisd).find('td:last').text(count);
		
    });
	
	
	var gntoal = 0;
	$('.gto').each(function(index, element) {
     gntoal+=+parseInt($(this).text());	
	 });  
	$('.tfoototal').text(gntoal);
	
	
	
	
	
	
	
							
							
}
                             });
} 






















$(document).on('click', '#reportsdatabtn', function (event) {
reportdatafn();
});



function reportdatafn(){
	$('#loadingPopUp').show();
	var Category = '';
	var isPayPoint = '';
    var flag = ''
	if($('#Category').val()=='U')
	{
	Category = 'N';
	isPayPoint = '';
	}
	else if($('#Category').val()=='R')
	{
	Category = 'Y';
	isPayPoint = '';	
	}
	
	
	if($('#Category').val()=='C')
	{
	Category = '';
	isPayPoint = 'N';
	}
	else if($('#Category').val()=='P')
	{
	Category = '';
	isPayPoint = 'Y';	
	}



    if($.datepicker.formatDate('dd/mm/yy', new Date())==$('#fromdate').val() && $.datepicker.formatDate('dd/mm/yy', new Date())==$('#toDate').val())
	{
	flag = 0;
	}
	else
	{
	flag = 1;	
	}








$.ajax({ 
						url : 'http://reportsemitraapp.rajasthan.gov.in/emitraReportsRepository/mgetDistrictSummaryDeptSerAEM',
        				//url : 'https://emitraapp.rajasthan.gov.in/webServicesRepository/mgetDistrictSummaryDeptSerAEM',
                     	  type : 'POST',
    data : {departmentId:$('#deptcode').val(),isRural:Category,districtId:$('#dccode').val(),isPayPoint:isPayPoint, serviceId:$('#serviceName').val(), fromDate:$('#fromdate').val(),toDate:$('#toDate').val(),flag:flag},
							success : function(dataVal) {
$('#reportserverData').html('');
console.log(dataVal);
var noamnt=0;
var notransaction=0;
var optkisok=0;
var activekisok=0;                         

var dataValdata = JSON.parse(dataVal);


 $(dataValdata.data).each(function(key,value){

if($('#dccode').val() == '')
{

if(key!=0)
{
optkisok+=+value.OPERATIONAL_KIOSK;
}

notransaction+=+value.NO_OF_TRANSACTIONS;
activekisok+=+value.TOTAL_KIOSK;
noamnt+=+value.TRANSACTION_AMOUNT;
var amntransaction = value.TRANSACTION_AMOUNT;
$('#reportserverData').append('<tr><td>'+(key+1)+'</td><td>'+value.DISTRICT_NAME_ENG+'</td><td style="text-align: right;">'+value.TOTAL_KIOSK+'</td><td style="text-align: right;">'+value.OPERATIONAL_KIOSK+'</td><td style="text-align: right;">'+value.NO_OF_TRANSACTIONS+'</td><td style="text-align: right;">'+amntransaction+'</td></tr>');
}  
else
{
if(key==1)
{
notransaction+=+value.NO_OF_TRANSACTIONS;
optkisok+=+value.OPERATIONAL_KIOSK;
activekisok+=+value.TOTAL_KIOSK;
noamnt+=+value.TRANSACTION_AMOUNT;
var amntransaction = value.TRANSACTION_AMOUNT;
$('#reportserverData').append('<tr><td>'+(key+1)+'</td><td>'+value.DISTRICT_NAME_ENG+'</td><td style="text-align: right;">'+value.TOTAL_KIOSK+'</td><td style="text-align: right;">'+value.OPERATIONAL_KIOSK+'</td><td style="text-align: right;">'+value.NO_OF_TRANSACTIONS+'</td><td style="text-align: right;">'+amntransaction+'</td></tr>');
}

} 



 }); 

$('.noamnt').html(noamnt);
$('.notransaction').html(notransaction);
$('.optkisok').html(optkisok);
$('.activekisok').html(activekisok);

$('#loadingPopUp').hide(); 


						//	console.log('reports-------- success'+dataValdata);
                             },
                              error : function(dataVal) {
$('#loadingPopUp').hide();
                             console.log('-------- reports error'+JSON.stringify(dataVal));
							}
                             });
} 





$(document).on('change', '#ServiceBillId', function (event) {

if($(this).val()==2575)
{
$('#mobtypdiv').show();	
}
else
{
$('#mobtypdiv').hide();	
}

});


// 	PHED REPORTS SRCIPT START

$(document).on('click', '#pheddata', function (event) {

$( "#pheddata").unbind( "click" );

if($('#depc').val()=='')
{
alert('Select Service');
return false;
}

if($('#consumerKey').val()=='')
{
alert('Enter Consumer Key');
return false; 
}



    $('#loadingPopUp').show();



$.ajax({ 
						url : 'http://reportsemitraapp.rajasthan.gov.in/emitraReportsRepository/getPhedTransactionHistory ',
                     	  type : 'POST',
                           data : {consumerKey:$('#consumerKey').val(), srvId:$('#depc').val(), fromDate:$('#fromdate').val(), toDate :$('#toDate').val()}, 
							success : function(jsondata) {
							var dataValdata = JSON.parse(jsondata);
							console.log('-------- PHED reports '+JSON.stringify(dataValdata));  

 $('#phedreportMatrixData').html('').empty();
 $(dataValdata.phedDetailsJson).each(function(key,value){

$("#phedreportMatrixData").append("<tr><td>"+(key+1)+"</td><td>"+value.token_no+"</td><td>"+value.receipt_no+"</td><td>"+value.CONSUMER_KEY+"</td><td>"+value.BILL_MONTH+"</td><td>"+value.BILL_YEAR+"</td><td>"+value.CONSUMER_NAME+"</td><td>"+value.TOTAL_AMOUNT+"</td><td>"+value.STATUS+"</td><td>"+value.TRANSACTION_DATE+"</td></tr>");



 }); 
$('#loadingPopUp').hide();
		console.log('reports-------- success'+dataValdata);
                             },
                              error : function(dataVal) {

                             console.log('-------- reports DepartmentId'+JSON.stringify(dataVal));
							}
                             });


});

// 	PHED REPORTS SRCIPT END


;(function($){
  $.fn.rotate = function(options){
  var defaults = {
    speed:10,
    width:"100%",
    slide1:".slide1"
  }
  var options = $.extend(defaults, options);

  this.each(function(){
    var thisR = $(this),
        thisC = thisR.children();
   // thisR.append('<a href="javascript:;" class="rotate-prev">Prev</a>');
    thisC.append('<ul class="slide2">'+ $(options.slide1).html() +'</ul>');
    thisR.css({'overflow':'hidden','width':options.width});
    thisC.css('width','50000px').children().css('float','left');
    function Marquee(){
      if(thisR.scrollLeft() >= $(options.slide1).width()){
        thisR.scrollLeft(0);
      }else{
        thisR.scrollLeft(thisR.scrollLeft()+1);
      }
    }
      var sliding=setInterval(Marquee,options.speed);
      thisR.hover(function() {
        clearInterval(sliding);
      },function(){
        sliding=setInterval(Marquee,options.speed);
      });
    });

}})(jQuery);  


$(document).ready(function(){ 


 $(document).on('click', '.js-modal-close', function (event) {
	 $('video').get(0).pause(); 
	 });


$("#slideImg").rotate();
    //$("#slideImg").hide();
    });








if(document.URL == 'http://emitra.rajasthan.gov.in/content/emitra/en/Guideline/circularofficeorder.html')
{
 officeOrderData();
}



function officeOrderData()
{

$.ajax({ 
											url : 'https://emitraapp.rajasthan.gov.in/webServicesRepository/getOfficeorderManagementJSON',
                                          //  url : 'http://emitrauat.rajasthan.gov.in/webServicesRepositoryUat/mgetApplicationsStatusMobile',	

                                            type : 'POST',
											
											success : function(dataVal) {
                                               console.log('ServiceGUID---'+dataVal);

                                                $(dataVal).each(function(key,value){
                                                    //console.log('value.serviceName--'+value.serviceName);




											$('#officeorderData').append('<tr><td>'+(key+1)+'</td><td>'+value.DOC_TYPE_NAME+'</td><td>'+value.OFFICE_ORDER_TITLE+'</td><td>'+value.DOC_DATE+' </td> <td>'+value.DOC_DESCRIPTION+'</td><td><a class="btn-sm btn-success" href="'+value.DOC_URL+'" target="_blank">Download</a></tr>');



                                            });



											$('#officeorder').DataTable();

                                            },
                                             error : function(data) {
                                            // console.log('-------- servList error'+JSON.stringify(data));

                                            }
                                            });


}







 $(document).on('change', '.gspkisokchange', function (event) {

$('#gspkioskdatatable').DataTable().clear();
$('#gspkioskdatatable').DataTable().destroy();

showLoadingPopup();
$.ajax({ 
											//url : 'https://emitraapp.rajasthan.gov.in/webServicesRepository/getGspKioskDetail',
											url : 'http://reportsemitraapp.rajasthan.gov.in/emitraReportsRepository/getGspKioskDetail',
                                          //  url : 'http://emitrauat.rajasthan.gov.in/webServicesRepositoryUat/mgetApplicationsStatusMobile',	
											data : {distId:$(this).val()},
                                             type : 'POST',
											success : function(dataVal) {
                                               console.log('kiosk gst data---'+dataVal); 
											   $('#gspkioskData').html('');

											    if(dataVal.length == 0)
                                                {
											//	$('#kioskData').append("<div class='alert alert-danger text-center' style='color: red;'><strong>Info!</strong> Data Not Available. </div>");
                                                }
                                                else
                                                {


                                                $(dataVal).each(function(key,value){
                                                    //console.log('value.serviceName--'+value.serviceName);

$("#gspkioskData").append("<tr><td>"+(key+1)+"</td><td>"+value.KIOSK_NAME+"</td><td>"+value.ADDR_ENG+"</td><td>"+value.PINCODE+"</td><td>"+value.KIOSK_DISTRICT+"</td><td>"+value.PHONE_NO+"</td><td>"+value.EMAIL+"</td><td>"+value.IS_RURAL+"</td></tr>");




                                            });
kisokgspdatatable();

  hideLoadingPopup(); 
												}

                                            },
                                             error : function(data) {
                                            // console.log('-------- servList error'+JSON.stringify(data));

                                            }
                                            });


});

 





        function showLoadingPopup() {
	var popupSelector = $("#loadingPopUp");
	$(".popup-holder").css("width", "100%");
	popupSelector.fadeIn();
}

function hideLoadingPopup() {
	$("#loadingPopUp").fadeOut();

}

function kisokgspdatatable() 
{



 $('#gspkioskdatatable').DataTable( {
        dom: 'Bfrtip',
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
        buttons: [
            {
                extend: 'excelHtml5',
                title: 'GSP Suvidha Providers'
            },
            {
                extend: 'pdfHtml5',
                title: 'GSP Suvidha Providers'
            }
        ]
    } );






} 

var inr=0;
$('.next2').click(function(){
	inr=(inr)+5;
	$('#slider1 .overview').css('margin-left','-'+inr+'%');
});

$('.prev2').click(function(){
	inr=0;
	$('#slider1 .overview').css('margin-left','0%');
});

//$('#jobfair').show(); 


  // JavaScript Document// JavaScript Document // JavaScript Document 