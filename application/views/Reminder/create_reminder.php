  <!-- Content Wrapper. Contains page content -->

  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Tambah pengingat</h1>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->
    <div class="container">
    <div class="card card-danger">
              <div class="card-header">
                <h3 class="card-title">Isi data pengingat</h3>
              </div>
              <div class="card-body">
              <form method="post" action="<?php echo base_url('reminder/create_reminder_process') ?>" enctype="multipart/form-data" id="form_news">

                <!-- phone mask -->
                <div class="form-group">
                  <label>Judul pengingat</label><br>
                  <small id="msg_title" hidden style="color: red">judul kosong</small>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-newspaper"></i></span>
                    </div>
                    <input Required name="title" id="title" type="text" class="form-control" placeholder="judul pengingat">
                  </div>
                  <!-- /.input group -->
                </div>
                <!-- /.form group -->

                <!-- IP mask -->
                <div class="form-group">
                  <label>Catatan pengingat</label><br>
                  <small id="msg_content" hidden style="color: red">catatan pengingat kosong</small>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-pen"></i></span>
                    </div>
                    <textarea name="detail" id="detail" class="form-control" rows="5" placeholder="masukan catatan pengingat ..."></textarea>
                  </div>
                  <!-- /.input group -->
                </div>

                <div class="form-group">
                  <label>Tanggal pengingat</label><br>
                  <small id="msg_title" hidden style="color: red">judul kosong</small>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-calendar-day"></i></span>
                    </div>
                    <input Required name="date" id="date" type="date" class="form-control" placeholder="tanggal pengingat">
                  </div>
                  <!-- /.input group -->
                </div>
                <div class="form-group">
                  <input type="submit" class="col-12 col-md-6 btn btn-primary" value="Buat pengingat" id="but_upload">
                </div>
                <!-- /.form group -->
                </form>
              </div>
              <!-- /.card-body -->
            </div>
          </div>
  
                      
    