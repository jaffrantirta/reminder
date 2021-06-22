function add_sub_districts(){
    $('.loader').attr('hidden', false);
    $.ajax({
        url: base_url+"api/get_data/districts",
        type: "get",
        success: function(result){
            $('.loader').attr('hidden', true);
            var v = "'add_sub_districts'";
            console.log('data 222 : '+result);
            var data = JSON.parse(result);
            var size = data.data.length;
            var i = 0;
            var txt;
            var d;
            for(i=0;i<size;i++){
                d = data.data[i];
                txt = txt+'<option value="'+d.id+'" >'+d.name+'</option>';
            }
            Swal.fire({
                html:
                '<div class="form-group">'+
                    '<label>Tambah Kelurahan/Desa</label><br>'+
                    '<small id="msg_select" hidden style="color: red">pilih kabupaten terlebih dahulu</small>'+
                    '<select title="pilih kecamatan" id="select" class="form-control select2" style="width: 100%;">'+
                        '<option value="not selected yet">Pilih Kecamatan</option>'+
                        txt+
                    '</select>'+
                '</div>'+
                '<div class="form-group">'+
                    '<small id="msg_districts" hidden style="color: red">nama kecamatan harus diisi</small>'+
                    '<input title="nama kelurahan/desa" id="name_to_be_add" class="form-control" type="text" placeholder="Nama Kelurahan/Desa">'+
                '</div>'+
                '<div class="form-group">'+
                    '<button class="btn btn-primary btn-sm" onClick="action_check('+v+')">tambah</button>'+
                '</div>',
                showConfirmButton: false
            });
        },
        error: function (result, ajaxOptions, thrownError) {
            $('.loader').attr('hidden', true);
            // console.log('data : '+result.responseText);
            error_message('error', 'Oops! sepertinya ada kesalahan', 'kesalahan tidak diketahui');
            if(result.response.status == false){
                var string = JSON.stringify(result.responseText);
                var msg = JSON.parse(result.responseText);
                error_message('error', 'Oops! sepertinya ada kesalahan', msg.message['indonesia']);
            }
        }
    });
}

function add_sub_districts_process(sub_districts_name, districts_id){
    $('.loader').attr('hidden', false);
    $.ajax({
        url: base_url+"api/insert_sub_districts",
        type: "post",
        data: {'sub_districts_name':sub_districts_name, 'districts_id':districts_id},
        success: function(result){
            $('.loader').attr('hidden', true);
            // console.log('data : '+result);
            var data = JSON.parse(result);
            Swal.fire({
                allowOutsideClick: false,
                text: data.response.message['indonesia'],
            }).then((result) => {
                if (result.isConfirmed) {
                    location.reload(true);
                }
              });
        },
        error: function (result, ajaxOptions, thrownError) {
            $('.loader').attr('hidden', true);
            // console.log('data : '+result.responseText);
            error_message('error', 'Oops! sepertinya ada kesalahan', 'kesalahan tidak diketahui');
            if(result.response.status == false){
                var string = JSON.stringify(result.responseText);
                var msg = JSON.parse(result.responseText);
                error_message('error', 'Oops! sepertinya ada kesalahan', msg.message['indonesia']);
            }
        }
    });
}
function edit_sub_districts(id){
    $('.loader').attr('hidden', false);
    $.ajax({
        url: base_url+"api/edit_sub_districts_view/"+id,
        type: "get",
        success: function(result){
            $('.loader').attr('hidden', true);
            var v = "'update_sub_districts'";
            // console.log('data : '+result);
            var data = JSON.parse(result);
            var size = data.data.districts.length;
            var i = 0;
            var txt;
            var d;
            for(i=0;i<size;i++){
                d = data.data.districts[i];
                txt = txt+'<option value="'+d.id+'" >'+d.name+'</option>';
            }
            Swal.fire({
                html:
                '<div class="form-group">'+
                    '<label>Edit Kelurahan/Desa</label><br>'+
                    '<small id="msg_select" hidden style="color: red">pilih kecamatan terlebih dahulu</small>'+
                    '<input id="id" type="hidden" value="'+data.data.sub_districts[0]['id']+'">'+
                    '<select title="pilih kecamatan" id="select" class="form-control select2" style="width: 100%;">'+
                        '<option value="'+data.data.sub_districts[0]['distric_id']+'">'+data.data.sub_districts['districts'][0]['name']+' (dipilih)</option>'+
                        txt+
                    '</select>'+
                '</div>'+
                '<div class="form-group">'+
                    '<small id="msg_districts" hidden style="color: red">nama kecamatan harus diisi</small>'+
                    '<input title="nama ke  lurahan/desa" id="name_to_be_add" class="form-control" type="text" placeholder="Nama Kelurahan/Desa" value="'+data.data.sub_districts[0]['name']+'">'+
                '</div>'+
                '<div class="form-group">'+
                    '<button class="btn btn-primary btn-sm" onClick="action_check('+v+')">edit</button>'+
                '</div>',
                showConfirmButton: false
            });
            
        },
        error: function (result, ajaxOptions, thrownError) {
            $('.loader').attr('hidden', true);
            // console.log('data : '+result.responseText);
            error_message('error', 'Oops! sepertinya ada kesalahan', 'kesalahan tidak diketahui');
            if(result.response.status == false){
                var string = JSON.stringify(result.responseText);
                var msg = JSON.parse(result.responseText);
                error_message('error', 'Oops! sepertinya ada kesalahan', msg.message['indonesia']);
            }
        }
    });
}
function delete_sub_districts(id){
    Swal.fire({
        title: 'Yakin Hapus ?',
    }).then((result) => {
        if (result.isConfirmed) {
            delete_data_sub_districts(id);
        }
    });
}
function delete_data_sub_districts(id){
    // console.log(id);
    $('.loader').attr('hidden', false);
    $.ajax({
        url: base_url+"api/delete_sub_districts",
        type: "post",
        data: {"id":id},
        success: function(result){
            $('.loader').attr('hidden', true);
            // console.log('data : '+result);
            var data = JSON.parse(result);
            Swal.fire({
                title: data.response.message['indonesia'],
                allowOutsideClick: false
            }).then((result) => {
                if (result.isConfirmed) {
                    location.reload(true);
                }
              });
        },
        error: function (result, ajaxOptions, thrownError) {
            $('.loader').attr('hidden', true);
            // console.log('data : '+result.responseText);
            error_message('error', 'Oops! sepertinya ada kesalahan', 'kesalahan tidak diketahui');
            if(result.response.status == false){
                var string = JSON.stringify(result.responseText);
                var msg = JSON.parse(result.responseText);
                error_message('error', 'Oops! sepertinya ada kesalahan', msg.message['indonesia']);
            }
        }
    });
}
function update_sub_districts_process(sub_districts_name, districts_id, id){
    // console.log('update_sub_districts_process : '+districts_id);
    $('.loader').attr('hidden', false);
    $.ajax({
        url: base_url+"api/update_sub_districts",
        type: "post",
        data: {'sub_districts_name':sub_districts_name, 'distric_id':districts_id, 'id':id},
        success: function(result){
            $('.loader').attr('hidden', true);
            // console.log('data : '+result);
            var data = JSON.parse(result);
            Swal.fire({
                allowOutsideClick: false,
                text: data.response.message['indonesia']
            }).then((result) => {
                if (result.isConfirmed) {
                    location.reload(true);
                }
            });
        },
        error: function (result, ajaxOptions, thrownError) {
            $('.loader').attr('hidden', true);
            // console.log('data : '+result.responseText);
            error_message('error', 'Oops! sepertinya ada kesalahan', 'kesalahan tidak diketahui');
            if(result.response.status == false){
                var string = JSON.stringify(result.responseText);
                var msg = JSON.parse(result.responseText);
                error_message('error', 'Oops! sepertinya ada kesalahan', msg.message['indonesia']);
            }
        }
    });
}