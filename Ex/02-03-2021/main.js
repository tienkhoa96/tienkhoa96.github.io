let points = [-22, 4, 12, 7, 44, -1, -32, 2]
        document.getElementById("bai1").innerHTML ='Bài 1: ' + points;

        function giamDan() {
            
            for(i=0; i<points.length; i++){
                for(j=i+1; j<points.length; j++){
                    if(points[i]+points[j]==16){
                        // temp = points[j];
                        // points[j] = points[i];
                        // points[i] = temp;
                        console.log(points[i])
                        console.log(points[j])
                    }
                }
            }
            document.getElementById("bai1").innerHTML ='Bài 1: ' + points;
        
        }