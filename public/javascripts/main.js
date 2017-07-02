console.log('ss')
function print(){  
    var name = $('#name').val();
    var brithday = $('#brithday').val();
    var data = {
        name:name,
        brithday:brithday
    }
    $.ajax({
        url:'/api/getJson',
        type:'post',
        data:data,
        success:function(json){
           $('#name').val(json.name);
           $('#brithday').val(json.brithday);
           console.log(json)
        }
    })
    console.log(data)
}

$('button').on('click',print)
