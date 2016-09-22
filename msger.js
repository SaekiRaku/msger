String.prototype.getLeft = function (spl) {
    return this.split(spl)[0];
}

String.prototype.getRight = function (spl){
    return this.split(spl).pop();
}

window.msger = {
    init:function(name){
        window.msger = (function(name){
            var last,flag = window.localStorage;
            // Test if browser supports localStorage Object;
            
            if(flag){
                window.addEventListener("storage",function(evt){
                    if(evt.key == "msger" && evt.newValue != last){
                        if(event[evt.newValue.getLeft(",")]){
                            event[evt.newValue.getLeft(",")]();
                            last = evt.newValue;
                        }
                    }else if(evt.key.getRight("msger-")==msger.name){
                        if(evt.newValue!="" && event[evt.newValue]){
                            event[evt.newValue]();
                            localStorage.removeItem(evt.key);
                        }
                    }
                });
            }else{
                // If not, use cookie to recive Message;

                setInterval(function(){
                    var data = document.cookie.getRight("msger-"+name+"=").getLeft(";");
                    if(data!="" && event[data.getLeft(",")]){
                        event[data.getLeft(",")]();
                        var res = document.cookie.getLeft("data");
                        document.cookie = document.cookie.slice(res.length+data.length);
                    }

                    data = document.cookie.getRight("msger=").getLeft(";");
                    if(data!="" && last!=data && event[data.getLeft(",")]){
                        event[data.getLeft(",")]();
                        last = data;
                    }
                });
            }

            var event = {};

            var duang = {
                name:name,
                on:function(msg,func){
                    event[msg] = func;
                },
                send:function(name,msg){
                    if(flag){
                        localStorage.setItem("msger-"+name,msg);
                    }else{
                        document.cookie += "msger-"+name+'='+msg;
                    }
                },
                broadcast:function(msg){
                    if(flag){
                        localStorage.setItem("msger",msg+","+Date.now());
                    }else{
                        document.cookie += "msger="+msg+","+Date.now()+";";
                    }
                }
            }

            return duang;
        })(name);
    }
}