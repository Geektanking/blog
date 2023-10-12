// 读取json文件数据
$json_string = file_get_contents('1.json');
// 解析json字符串
$data = json_decode($json_string);
// 打印数据
print_r($data);