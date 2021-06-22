function add_news_categories(){
    var v = "'add_news_categories'";
    Swal.fire({
        html:
        '<div class="form-group">'+
            '<label>Tambah Kategori Berita</label><br>'+
        '</div>'+
        '<div class="form-group">'+
            '<small id="msg_districts" hidden style="color: red">nama kategori harus diisi</small>'+
            '<input title="nama kelurahan/desa" id="name_to_be_add" class="form-control" type="text" placeholder="Nama Kategori Berita">'+
        '</div>'+
        '<div class="form-group">'+
            '<button class="btn btn-primary btn-sm" onClick="action_check('+v+')">tambah</button>'+
        '</div>',
        showConfirmButton: false
    });
}

function add_news_categories_process(news_categories_name){
    $('.loader').attr('hidden', false);
    $.ajax({
        url: base_url+"api/insert_news_categories",
        type: "post",
        data: {'news_categories_name':news_categories_name},
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
function edit_news_categories(id){
    $('.loader').attr('hidden', false);
    $.ajax({
        url: base_url+"api/edit_news_categories_view/"+id,
        type: "get",
        success: function(result){
            $('.loader').attr('hidden', true);
            var v = "'update_news_categories'";
            // console.log('data : '+result);
            var data = JSON.parse(result);
            Swal.fire({
                html:
                '<div class="form-group">'+
                    '<label>Edit Kategori Berita</label><br>'+
                    '<input id="id" type="hidden" value="'+data.data.news_categories[0]['id']+'">'+
                '</div>'+
                '<div class="form-group">'+
                    '<small id="msg_districts" hidden style="color: red">nama kecamatan harus diisi</small>'+
                    '<input title="nama ke  lurahan/desa" id="name_to_be_add" class="form-control" type="text" placeholder="Nama Kategori Berita" value="'+data.data.news_categories[0]['name']+'">'+
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
function delete_news_categories(id){
    Swal.fire({
        title: 'Yakin Hapus ?',
    }).then((result) => {
        if (result.isConfirmed) {
            delete_data_news_categories(id);
        }
    });
}
function delete_data_news_categories(id){
    // console.log(id);
    $('.loader').attr('hidden', false);
    $.ajax({
        url: base_url+"api/delete_news_categories",
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
function update_news_categories_process(news_categories_name, id){
    // console.log('update_news_categories_process : '+districts_id);
    $('.loader').attr('hidden', false);
    $.ajax({
        url: base_url+"api/update_news_categories",
        type: "post",
        data: {'news_categories_name':news_categories_name, 'id':id},
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