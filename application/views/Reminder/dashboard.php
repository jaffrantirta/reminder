  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Dashboard</h1>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <p hidden id="account_scope"><?php echo $session['account_scope'] ?></p>

    <section class="content">
      <div class="container-fluid">
        <div class="card card-default">
          <div class="row card-header">
            <h3 class="card-title">Pilih daerah yang ingin di tampilkan</h3>
            <div class="card-tools">
              <button type="button" class="btn btn-tool" data-card-widget="collapse">
                <i class="fas fa-minus"></i>
              </button>
            </div>
          </div>
          
          <div class="card-body">
            <div class="row">

              <div class="col-md-3 regencies_dropdown">
                <div class="form-group regencies_reload">
                  <label>Kabupaten</label>
                  <select id="select_regencies" class="form-control select2 select_regencies" style="width: 100%;">
                    <option value="not selected yet">- Pilih Kebupaten -</option>
                  </select>
                </div>
              </div>

              <div class="col-md-3 districts_dropdown">
                <div class="form-group districts_reload">
                  <label>Kecamatan</label>
                  <select id="select_districts" class="form-control select2 select_districts" style="width: 100%;">
                    <option value="not selected yet">- Pilih Kecamatan -</option>
                  </select>
                </div>
              </div>

              <div class="col-md-3 sub_districts_dropdown">
                <div class="form-group sub_districts_reload">
                  <label>Kelurahan/Desa</label>
                  <select id="select_sub_districts" class="form-control select2 select_sub_districts" style="width: 100%;">
                    <option value="not selected yet">- Pilih Kelurahan/Desa -</option>
                  </select>
                </div>
              </div>

              <div class="col-md-3">
                <div class="form-group">
                <label></label>
                <a href="#show" onClick="show()" class="col-12 btn btn-primary">Tampilkan</a>
                </div>
              </div>

            </div>
          </div>

        </div>

        
        <h3>Kabupaten</h3>
        <div class="row count_regencies_load">
        </div>
        <div hidden id="label_districts">
          <h4>---------------------------------</h4>
          <h3>Kecamatan</h3>  
        </div>
        <div class="row count_districts_load">
        </div>
        <div hidden id="label_sub_districts">
          <h4>---------------------------------</h4>
          <h3>Kelurahan/Desa</h3>
        </div>
        <div class="row count_sub_districts_load">
        </div>

        <div class="row">

          <div class="col-md-6 card card-danger">
            <div class="card-header">
              <h3 class="card-title">Pengguna terdaftar berdasarkan gender</h3>
              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                  <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool" data-card-widget="remove">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
            <div class="card-body">
              <p hidden id="male"><?php echo $gender['male'] ?></p>
              <p hidden id="female"><?php echo $gender['female'] ?></p>
            <canvas id="chart_gender" width="100" height="100"></canvas>
            </div>
          </div>

          <div class="col-md-6 card card-danger">
            <div class="card-header">
              <h3 class="card-title">Pengguna terdaftar berdasarkan pekerjaan</h3>
              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                  <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool" data-card-widget="remove">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
            <div class="card-body">
              <canvas id="chart_occupasion" width="100" height="100"></canvas>
            </div>
          </div>

        </div>

      </div>
    </section>
  </div>
