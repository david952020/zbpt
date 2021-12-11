
        //<input type="text" class="form-control input-medium" placeholder="开始时间" name="" id="startTime" />
        //<input type="text" class="form-control input-medium" placeholder="结束时间" name="" id="endTime" />

        jeDate({
            dateCell: "#startTime",
            //format: "YYYY-MM-DD ", //控制是否显示小时
            format: "YYYY-MM-DD hh:mm:ss", //控制是否显示小时
            isTime: true
        })
 
        jeDate({
            dateCell: "#endTime",
            //format: "YYYY-MM-DD ", //控制是否显示小时
            format: "YYYY-MM-DD hh:mm:ss", //控制是否显示小时
            isTime: true
        })
 
        //时间选择
        var mydateInput = document.getElementById("startTime");
        var date = new Date();
        var dateString = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + "  " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        mydateInput.value = dateString;
 
        var mydateInputs = document.getElementById("endTime");
        var dates = new Date();
        var dateStrings = dates.getFullYear() + "/" + (dates.getMonth() + 1) + "/" + dates.getDate() + "  " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        mydateInputs.value = dateStrings;