//xxxxxxxxxxxxxxxxxxxx

var vjs1 = "";

	for (i = 1; i <=12; i++) {
	  aa = "";
		for(j=1; j<=26; j++){
			
	        if(i<2){
	          if( j<13 || j>13){
	              aa += "&nbsp; "
	          }else{
	            aa += "*"
	          }
	        }
	    
	    else if(i<3){
	          if( j<12 || j>14){
	              aa += "&nbsp; "
	          }else{
	            aa += "*"
	          }
	    }
	    
	    else if(i<4){
	          if( j<11 || j>15){
	              aa += "&nbsp; "
	          }else{
	            aa += "*"
	          }
	    }
	    
	    else if(i<5){
	          if( j<10 || j>16){
	              aa += "&nbsp; "
	          }else{
	            aa += "*"
	          }
	    }
	    
	    else if(i<6){
	          if( j<9 || j>17){
	              aa += "&nbsp; "
	          }else{
	            aa += "*"
	          }
	    }
	    
	    else if(i<7){
	          if( j<8 || j>18){
	              aa += "&nbsp; "
	          }else{
	            aa += "*"
	          }
	    }

	    else if(i<8){
	          if( j<7 || j>19){
	              aa += "&nbsp; "
	          }else{
	            aa += "*"
	          }
	    }

	    else if(i<9){
	          if( j<5 || j>21){
	              aa += "&nbsp; "
	          }else{
	            aa += "*"
	          }
	    }

	    else if(i<10){
	          if( j<3 || j>23){
	              aa += "&nbsp; "
	          }else{
	            aa += "*"
	          }
	    }

	    else{
	          aa += "*"
	        }        
		}
	  // document.write(aa);
	  vjs1 += aa;
	  // document.write("</br>");
	  vjs1 += "</br>";
	}
js1.innerHTML = vjs1;

//xxxxxxxxxxxxxxxxxxxx

var vjs2 = "";

	for( i=1; i<=5; i++)
		{
		for(j=1; j<=i; j++){
		  // document.write("* &nbsp;");
		  vjs2 += "* &nbsp;";
		}
		// document.write("</br>");
		vjs2 += "</br>";
	}
	for( i=1; i<=5; i++)
		{
		for(j=4; j>=i; j--){
		  // document.write("* &nbsp;");
		  vjs2 += "* &nbsp;";
		}
		// document.write("</br>");
		vjs2 += "</br>";
	}
js2.innerHTML = vjs2;

//xxxxxxxxxxxxxxxxxxxx

var vjs3 = "";

	var star1 = 10;
	var star2 = 15;	

	for (i = 1; i <=star1; i++) {
		for(j=1; j<=star2; j++){
		vjs3 += "* &nbsp;";
		}
	  vjs3 += "</br>";
	}
	// Or this way
	for (i = 1; i <= 4; i++) {
	    var star = "+";
	      for(a = 1; a <= 7; a++){
	        star += "*";
	        
	      }
	  vjs3 += star;
	vjs3 += "</br>";
	}
js3.innerHTML = vjs3;

//xxxxxxxxxxxxxxxxxxxx

var vjs4 = "";

		for( i=1; i<=8; i++)
			{
			for(j=1; j<=i; j++){
			  // document.write("* &nbsp;");
			  vjs4 += "* &nbsp;";
			}
			// document.write("</br>");
			vjs4 += "</br>";
		}
		// Or this way
		var star = "-";
		for (i = 1; i <=5; i++) {
		  star += "*";
		  // document.write(star);
		  vjs4 += star;
		// document.write("</br>");
		vjs4 += "</br>";
		}	
js4.innerHTML = vjs4;

//xxxxxxxxxxxxxxxxxxxx

var vjs5 = "";

		dd=10; 
		for (i =0; i <=10; i++) {
			
			for(j=1; j<=dd; j++){

			    if(i >=2 && i <=8){
			    	dd = 4;
			    }else{
		        dd = 10;
			    }
		// document.write('*');
		vjs5 += "*";
			}
		// document.write("</br>");
		vjs5 += "</br>";
		}
js5.innerHTML = vjs5;

//xxxxxxxxxxxxxxxxxxxx

var vjs6 = "";

		for (i = 1; i <=8; i++) {
		  aa = "";
			for(j=5; j<=21; j++){
				
		        if(i<2){
		          if( j<13 || j>13){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
		        }
            
            else if(i<3){
		          if( j<12 || j>14 ||( j>12 && j<14 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<4){
		          if( j<11 || j>15 || (j>11 && j<15)){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<5){
		          if( j<10 || j>16 || (j>10 && j<16)){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<6){
		          if( j<9 || j>17){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<7){
		          if(j <8 || j>18 || (j>8 && j<18)){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<8){
		          if( j<7 || j>19 || (j>7 && j<19)){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<9){
		          if( j<5 || j>21 || (j>8 && j<18)){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else{
		          aa += "*"
		        }        
			}
		  // document.write(aa);
		  vjs6 += aa;
		  // document.write("</br>");
		  vjs6 += "</br>";
		}
js6.innerHTML = vjs6;

//xxxxxxxxxxxxxxxxxxxx

var vjs7 = "";

		for (i = 1; i <=9; i++) {
		  aa = "";
			for(j=0; j<=11; j++){
				
		        if(i<2){
		          if(j>6){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
		        }
            
            else if(i<3){
		          if( j<1 || j>9 ||( j>1 && j<9 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<4){
		          if( j<1 || j>10 ||( j>1 && j<10)){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<5){
		          if( j<1 || j>9 || (j>1 && j<9)){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<6){
		          if( j<1 || j>7){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<7){
		          if( j<1 || j>9 ||( j>1 && j<9 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<8){
		          if( j<1 || j>10 ||( j>1 && j<10)){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<9){
		          if( j<1 || j>9 || (j>1 && j<9)){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<10){
		          if( j<0 || j>7){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else{
		          aa += "*"
		        }        
			}
		  // document.write(aa);
		  vjs7 += aa;
		  // document.write("</br>");
		  vjs7 += "</br>";
		}
js7.innerHTML = vjs7;

//xxxxxxxxxxxxxxxxxxxx

var vjs8 = "";

		d=7
		for (i = 1; i <=9; i++) {
			for(j=2; j<=d; j++){
			// document.write('*  &nbsp;');
			vjs8 += "* &nbsp;";
			}

		    if(i==0 || i == 4 || i== 8){
		      d =7
		    }else{
		      d =2;
		    }
		// document.write("</br>");
		vjs8 += "</br>";
		}
js8.innerHTML = vjs8;

//xxxxxxxxxxxxxxxxxxxx

var vjs9 = "";

		d=6
		for (i =1; i <=8; i++) {
			for(j=1; j<=d; j++){
			// document.write('*  &nbsp;');
			vjs9 += "* &nbsp;";
			}

		    if(i % 4 == 0){
		      d = 3;
		    }
		    // else if(i === 7){
		    //    d = 1;
		    // } 
		    else{
		      d = 1;
		    }
		// document.write("</br>");
		vjs9 += "</br>";
		}
js9.innerHTML = vjs9;

//xxxxxxxxxxxxxxxxxxxx

var vjs10 = "";

		for (i = 1; i <=10; i++) {
		  aa = "";
			for(j=1; j<=17; j++){
				
		        if(i<2){
		          if( j<5 || j>13){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
		        }
            
            else if(i<3){
		          if( j<2 || j>15 ||( j>2 && j<15 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<4){
		          if( j<1 || j>16 ||( j>1 && j<16 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<5){
		          if(j>1){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<6){
		          if( j<1 || j>15 ||( j>1 && j<8 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<7){
		          if( j<1 || j>16 || ( (j>1 && j<8) || (j>8 && j<16) ) ){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<8){
		          if( j<1 || j>16 || ( (j>1 && j<8) || (j>10 && j<16) ) ){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<9){
		          if( j<1 || j>16 ||( j>1 && j<16 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<10){
		          if( j<2 || j>15 ||( j>2 && j<15 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<11){
		          if( j<5 || j>13){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else{
		          aa += "*"
		        }        
			}
		  // document.write(aa);
		  vjs10 += aa;
		  // document.write("</br>");
		  vjs10 += "</br>";
		}
js10.innerHTML = vjs10;

//xxxxxxxxxxxxxxxxxxxx

var vjs11 = "";

		for (i = 2; i <=11; i++) {
		  aa = "";
			for(j=0; j<=7; j++){
				
		        if( i>2 && i<11 ){

			          if( j<3 || j>4){
			            aa += "&nbsp; "
			          }else{
									aa += "*"
			          }
								
            }else{
		          aa += "*"
		        }  

			}
		  // document.write(aa);
		  vjs11 += aa;
		  // document.write("</br>");
		  vjs11 += "</br>";
		}
js11.innerHTML = vjs11;

//xxxxxxxxxxxxxxxxxxxx

var vjs12 = "";

		for (i = 1; i <=9; i++) {
		  aa = "";
			for(j=1; j<=12; j++){
				
		        if(i<2){
		          if( j<1 || j>11 ||( j>1 && j<11 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
		        }
            
            else if(i<3){
		          if( j<1 || j>9 ||( j>1 && j<9 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<4){
		          if( j<1 || j>7 ||( j>1 && j<7 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<5){
		          if( j<1 || j>5 ||( j>1 && j<5 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<6){
		          if(j>2){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<7){
		          if( j<1 || j>5 ||( j>1 && j<5 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<8){
		          if( j<1 || j>7 ||( j>1 && j<7 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<9){
		          if( j<1 || j>9 ||( j>1 && j<9 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<10){
		          if( j<1 || j>11 ||( j>1 && j<11 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else{
		          aa += "*"
		        }        
			}
		  // document.write(aa);
		  vjs12 += aa;
		  // document.write("</br>");
		  vjs12 += "</br>";
		}
js12.innerHTML = vjs12;

//xxxxxxxxxxxxxxxxxxxx

var vjs13 = "";

		for (i = 1; i <=7; i++) {
		  aa = ""
			for(j=2; j<=12; j++){
				
		        if(i <=6){
		          if(j>=3){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
		        }else{
		          aa += "*"
		        }        
			}
		  // document.write(aa);
		  vjs13 += aa;
		  // document.write("</br>");
		  vjs13 += "</br>";
		}
js13.innerHTML = vjs13;

//xxxxxxxxxxxxxxxxxxxx

var vjs14 = "";

		for (i = 1; i <=10; i++) {
		  aa = "";
			for(j=1; j<=18; j++){
				
		        if(i<2){
		          if( j<1 || j>17 ||( j>1 && j<17 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
		        }
            
            else if(i<3){
		         if( j<1 || j>17 ||( j>2 && j<16 ) || (j>15 && j<16)){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<4){
		          // if( j<1 || j>19 ||( j>4 && j<13 )){
							if( j<1 || j>17 || ( (j>1 && j<3) || (j>3 && j<15) || (j>15 && j<17) ) ){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<5){
		       // if( j<1 || j>19 ||( j>5 && j<12 )){
							if( j<1 || j>17 || ( (j>1 && j<4) || (j>4 && j<14) || (j>14 && j<17) ) ){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<6){
		          // if( j<1 || j>19 ||( j>7 && j<11 )){
							if( j<1 || j>17 || ( (j>1 && j<5) || (j>5 && j<13) || (j>13 && j<17) ) ){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<7){
		          if( j<1 || j>17 || ( (j>1 && j<6) || (j>6 && j<12) || (j>12 && j<17) ) ){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<8){
		         if( j<1 || j>17 || ( (j>1 && j<7) || (j>7 && j<11) || (j>11 && j<17) ) ){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<9){
		          if( j<1 || j>17 || ( (j>1 && j<8) || (j>8 && j<10) || (j>10 && j<17) ) ){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<10){
		          if( j<1 || j>17 || ( (j>1 && j<9) || (j>9 && j<17) ) ){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<11){
		          if( j<1 || j>17 ||( j>1 && j<17 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else{
		          aa += "*"
		        }        
			}
		  // document.write(aa);
		  vjs14 += aa;
		  // document.write("</br>");
		  vjs14 += "</br>";
		}
js14.innerHTML = vjs14;

//xxxxxxxxxxxxxxxxxxxx

var vjs15 = "";

		for (i = 1; i <=12; i++) {
		  aa = "";
			for(j=1; j<=20; j++){
				
		        if(i<2){
		          if( j<5 || j>12){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
		        }
            
            else if(i<3){
		          if( j<2 || j>15 ||( j>2 && j<15 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<4){
		          if( j<1 || j>16 ||( j>1 && j<16 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<5){
		          if( j<1 || j>16 ||( j>1 && j<16 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<6){
		          if( j<1 || j>16 || ( (j>1 && j<8) || (j>8 && j<16) ) ){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<7){
		          if( j<1 || j>16 || ( (j>1 && j<9) || (j>9 && j<16) ) ){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<8){
		          if( j<1 || j>16 || ( (j>1 && j<11) || (j>11 && j<16) ) ){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<9){
		           if( j<1 || j>16 || ( (j>1 && j<14) || (j>14 && j<16) ) ){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<10){
		           if( j<1 || j>16 ||( j>1 && j<16 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<11){
		          if( j<2 || j>18 || ( (j>2 && j<15) || (j>15 && j<18) ) ){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<12){
		          if( j<5 || j>18 || (j>13 && j<18) ){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<13){
		          if( j<16 || j>17){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }


            else{
		          aa += "*"
		        }        
			}
		  // document.write(aa);
		  vjs15 += aa;
		  // document.write("</br>");
		  vjs15 += "</br>";
		}
js15.innerHTML = vjs15;

//xxxxxxxxxxxxxxxxxxxx

var vjs16 = "";

		for (i = 1; i <=11; i++) {
		  aa = "";
			for(j=0; j<=18; j++){
				
		        if(i<2){
		          if( j<1 || j>17 ||( j>1 && j<17 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
		        }
            
            else if(i<3){
						 if( j<1 || j>17 ||( j>1 && j<17 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<4){
		          if( j<3 || j>15 ||( j>3 && j<15 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<5){
			       	if( j<5 || j>13 ||( j>5 && j<13 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<6){
		          if( j<7 || j>11 ||( j>7 && j<11 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            
            else if(i<7){
		          if( j<9 || j>9){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<8){
		         if( j<7 || j>11 ||( j>7 && j<11 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<9){
		          if( j<5 || j>13 ||( j>5 && j<13 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<10){
		          if( j<3 || j>15 ||( j>3 && j<15 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else if(i<11){
		         if( j<1 || j>17 ||( j>1 && j<17 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }
            else if(i<12){
		        if( j<1 || j>17 ||( j>1 && j<17 )){
		              aa += "&nbsp; "
		          }else{
		            aa += "*"
		          }
            }

            else{
		          aa += "*"
		        }        
			}
		  // document.write(aa);
		  vjs16 += aa;
		  // document.write("</br>");
		  vjs16 += "</br>";
		}
js16.innerHTML = vjs16;

//xxxxxxxxxxxxxxxxxxxx