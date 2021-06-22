<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
class Api extends CI_Controller {
	public function __construct(){
		parent::__construct();
		$this->load->helper('url');
		$this->load->model('api_model');
		$this->load->library('Ssp');
		$this->load->library('mailer');
		$this->load->library('pdf');
		$this->load->library('pdf2');
	}
	public function index(){
    if($this->session->userdata('authenticated_admin')){
			$this->dashboard();
		}else{
			$this->login();
		}
	}
  public function cek_session(){
    echo json_encode($this->session->all_userdata());
  }

    // --------------------------------------------------- DATA TABLE FUNCTION -------------------------------
    public function get_reminder_data_table(){
			$columns = array(
		      array(
		        'db' => 'title',  'dt' => 0,
		        'formatter' => function($d, $row){
		          return $d;
		        }
		      ),
          array(
		        'db' => 'detail',  'dt' => 1,
		        'formatter' => function($d, $row){
		          return $d;
		        }
		      ),
          array(
		        'db' => 'date',  'dt' => 2,
		        'formatter' => function($d, $row){
		          return $d;
		        }
		      ),
		    );
		    $ssptable='reminds';
		    $sspprimary='id';
		    $sspjoin='';
		    $sspwhere='id>=0';
		    $go=SSP::simpleCustom($_GET,$this->datatable_config(),$ssptable,$sspprimary,$columns,$sspwhere,$sspjoin);
		    echo json_encode($go);
	  }
}

