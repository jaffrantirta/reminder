var base_url = document.getElementById('base_url').innerHTML;
function error_message($icon, $title, $message){
    Swal.fire({
        icon: $icon,
        html:
        '<div class="col-12">'+
        '<center>'+
        '<strong>'+$title+'</strong><br>'+
        '<small>'+$message+'</small>'+
        '</center>'+
        '</div>',
        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton: true
    });
}
function login(){
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    // console.log('route : '+base_url);
    if(phone != ''){
        if(password != ''){
            $('.loader').attr('hidden', false);
            $.ajax({
                url: base_url+"api/login_process",
                type: "post",
                data: {'phone':phone, 'password':password},
                success: function(result){
                    $('.loader').attr('hidden', true);
                    // console.log('data : '+result);
                    var data = JSON.parse(result);
                    var d = data.data[0];
                    // console.log(d.name);
                    set_session(d.id, d.role_id, d.name, d.nik, d.sub_district_id, d.community_unit, d.email, d.date_of_birth, d.sex, d.occupation_id, d.profile_photo, d.ktp_photo, d.whatsapp_number);
                },
                error: function (result, ajaxOptions, thrownError) {
                    $('.loader').attr('hidden', true);
                    // console.log('data : '+xhr.responseText);
                    error_message('error', 'Oops! sepertinya ada kesalahan', 'kesalahan tidak diketahui');
                    var string = JSON.stringify(result.responseText);
                    var msg = JSON.parse(result.responseText);
                    error_message('error', 'Oops! sepertinya ada kesalahan', msg.response.message['indonesia']);
                }
            });
        }else{
            error_message('warning', 'Oops! sepertinya ada kesalahan', 'password kosong');
        }
    }else{
        error_message('warning', 'Oops! sepertinya ada kesalahan', 'phone kosong');
    }
}
function set_session(id, role_id, user_name, nik, sub_district_id, community_unit, email, date_of_birth, sex, occupation_id, profile_photo, ktp_photo, whatsapp_number){
    $('.loader').attr('hidden', false);
    $.ajax({
        url: base_url+"api/set_session",
        type: "post",
        data: 
        {
            'id':id, 
            'role_id':role_id, 
            'name':user_name,
            'nik':nik,
            'sub_district_id':sub_district_id,
            'community_unit':community_unit,
            'email':email,
            'date_of_birth':date_of_birth,
            'sex':sex,
            'occupation_id':occupation_id,
            'profile_photo':profile_photo,
            'ktp_photo':ktp_photo,
            'whatsapp_number':whatsapp_number,
            'user_auth':'authenticated_admin'
        },
        success: function(result){
            $('.loader').attr('hidden', true);
            // var url = window.location.href
            // console.log('url : '+url);
            // window.location.replace(url);
            error_message('success', 'Login berhasil', '');
            location.reload();
        },
        error: function (error, ajaxOptions, thrownError) {
            $('.loader').attr('hidden', true);
            // console.log('data : '+error.responseText);
            error_message('error', 'Oops! sepertinya ada kesalahan', 'kesalahan tidak diketahui');
            var string = JSON.stringify(error.responseText);
            var msg = JSON.parse(error.responseText);
            if(msg.response.status != false){
                error_message('error', 'Oops! sepertinya ada kesalahan', 'kesalahan tidak diketahui');
            }
            
        }
    });
}