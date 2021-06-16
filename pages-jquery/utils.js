$.extend($.fn,{
    selectAll(){
        var flag=true
        // 遍历this
        for(var i=0;i<this.length;i++){
            if(!this[i].checked){
                flag=false
                break
            }
        }
        console.log(flag)
        return flag
    },
    setChecked(type){
        // 遍历this
        for(var i=0;i<this.length;i++){
            // 设置值就可以
            this[i].checked=type===false?false:true
        }
        return this
    },
    getChecked(){
        if(this.length)return this[0].checked
        // 表示没有
        return false
    }
})