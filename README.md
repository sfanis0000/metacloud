# metaCLOUD - VNF Metadata Service API

<object>metaCLOUD is a REST API that enables storing of metadata information regarding a VNF (virtual network function) deployed in Openstack/VMware.</object><br><br>

The main URL for sending REST requests is:

<a href='http://<server_ip>/vnf_meta'>http://<server_ip>/vnf_meta</a><BR><br>

Through metaCLOUD you are able to create new REST entries, update existing ones or even delete old items.<br><br>

<b style='font-size:18px;'>Examples of Usage:</b><br><Br>

1.<object> Open a browser and check the following IP</object>:

<a href='http://<server_ip>/vnf_meta'>http://<server_ip>/vnf_meta</a><br><br>
It contains all the stored entries so far.<br><br>

Alternatively you can use cURL:<br><Br>
curl -X GET -H "Content-type: application/json" -H "Accept: application/json" http://<server_ip>/vnf_meta<br><br>

[{"vnf_name":"metacloud","vnfd_id":"4.0","application_version":"4.0","vnf_package_name":"metacloud","vnf_description":"VNF with 4 instances","createdAt":"2017-07-08T09:11:11.815Z","updatedAt":"2017-07-08T09:11:11.815Z","id":1},{"vnf_name":"peroVNF","vnfd_id":"3.0","application_version":"3.0","vnf_package_name":"peroVNF","vnf_description":"VNF with 2 instances","createdAt":"2017-07-08T10:13:57.970Z","updatedAt":"2017-07-08T10:13:57.970Z","id":2}]
<br><br>

2.<object> Add new metadata entries</object>:<br>

<a>http://<server_ip>/vnf_meta/create?vnf_name=metacloud&vnfd_id=4.0&application_version=4.0&vnf_package_name=metacloud&vnf_description=VNF+with+4+instances</a><br>

<a>http://<server_ip>/vnf_meta/create?vnf_name=peroVNF&vnfd_id=3.0&application_version=3.0&vnf_package_name=peroVNF&vnf_description=VNF+with+2+instances</a><br><br>

3.<object> Update existing entries</object>:<br>

<a>http://<server_ip>/vnf_meta/update/2?vnf_name=peroVNF</a><br><br>

4.<object> Delete metadata entry</object>:<br>

<a>http://<server_ip>/vnf_meta/destroy/3<br><br>
