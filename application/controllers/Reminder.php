<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
class Reminder extends CI_Controller {
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
		$this->dashboard();
	}
	public function create_reminder(){
		$data['page'] = 'Tambah pengingat';
		$this->load->view('Reminder/Template/header', $data);
		$this->load->view('Reminder/create_reminder', $data);
		$this->load->view('Reminder/Template/footer', $data);
	}
	public function create_reminder_process(){
		$title = $this->input->post('title');
		$detail = $this->input->post('detail');
		$date = $this->input->post('date');
		$times = '1';

		$data = array(
			'title'=>$title,
			'detail'=>$detail,
			'date'=>$date,
			'times_to_remind'=>$times
		);

		if($this->api_model->insert_data('reminds', $data)){
			$msg = array(
				'status'=>true,
				'title'=>'Pengingat ditambahkan',
				'message'=>'♥♥♥♥♥♥♥♥',
				'link_redirect'=>base_url('reminder/dashboard'),
				'button_text'=>'Kembali ke dashboard'
			);
			$this->load->view("Message/index", $msg);
		}else{
			$msg = array(
				'status'=>false,
				'title'=>'Pengingat gagal ditambahkan',
				'message'=>'♥♥♥♥♥♥♥♥',
				'link_redirect'=>base_url('reminder/create_reminder'),
				'button_text'=>'Kembali ke tambah pengingat'
			);
			$this->load->view("Message/index", $msg);
		}
	}
	public function dashboard(){	
		$data['page'] = 'Dashboard';
		// $data['session'] = $this->session->all_userdata();
		$this->load->view('Reminder/Template/header', $data);
		$this->load->view('Reminder/reminder', $data);
		$this->load->view('Reminder/Template/footer', $data);
	}
	public function call_reminder(){
		$today = date('Y-m-d');
		// $today = date('2021-06-23');
		$result = $this->api_model->get_data_by_where('reminds', array('date'=>$today))->result();
		foreach($result as $data){
			if($data->detail == '' || $data->detail == null){
				$detail = "tidak ada catatan";
			}else{
				$detail = $data->detail;
			}
			$msg = '== PENGINGAT ==> '.$data->title.' ('.$detail.')';
			$this->send_whatsapp('081353781440', $msg);
		}
	}

	public function send_whatsapp($nohp, $msg){

    	$left = substr($nohp,0,1);

    	if($left == "0"){
		  $replaceWith = '62';
		  $findStr = '0';
		  $pos = strpos($nohp, $findStr);
		  $finalnohp = substr_replace($nohp, $replaceWith, $pos, strlen($findStr));
		  $data = [
		    'phone' => $finalnohp, // Receivers phone
		    'body' => $msg, // Message
		  ];
		  $json = json_encode($data); // Encode data to JSON

		  $url = 'https://eu6.chat-api.com/instance134232/sendMessage?token=048a95nnnbi9ikgf';
		  $options = stream_context_create([
		    'http' => [
		      'method'  => 'POST',
		      'header'  => 'Content-type: application/json',
		      'content' => $json
		    ]
		  ]);
		  echo file_get_contents($url, false, $options);
		}else if($left == "6"){
			$data = [
		    'phone' => $nohp, // Receivers phone
		    'body' => $msg, // Message
		  ];
		  $json = json_encode($data); // Encode data to JSON

		  $url = 'https://eu6.chat-api.com/instance134232/sendMessage?token=048a95nnnbi9ikgf';
		  $options = stream_context_create([
		    'http' => [
		      'method'  => 'POST',
		      'header'  => 'Content-type: application/json',
		      'content' => $json
		    ]
		  ]);
		  echo file_get_contents($url, false, $options);
		}else{
			$response['sent'] = false;
			$response['message'] = 'nomor telepon yang anda masukan tidak valid';
			echo json_encode($response);
		}
	}
}
