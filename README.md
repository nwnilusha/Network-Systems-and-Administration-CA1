# Docker_Container_Nilusha

#This repository is for NETWORKS AND SYSTEMS ADMINISTRATION assignment with Docker contanarization with Ansible automation

List Of files
1. docker_deploy.yml
2. Sensible.cfg
3. Inventory.ini
4. Index.html
5. Main.js
6. Product.html

How this works : Instructions to work with this in Ubuntu machine

1. Clone this repository using 'git clone' to your control machine. This is the pc you execute your Ansible script

2. Install Ansible to your control machine

3.Install SSH client to your control machine (sudo apt install openssh-client). install python 3 (sudo apt install python3). install python package manager pip (sudo apt install python3-pip), install ansible (pip3 install ansible)

4. Get the target machine IP address and update the inventory.ini file with that IP address and its username and password.(ansible_host= ansible_user= ansible_password=)

5. Execute the ansible playbook script with below command. --ask-pass(enter target machine password) and --ask-become-pass(enable the docker execution admin rights)

ansible-playbook -i inventory.ini docker_deploy.yml --ask-pass --ask-become-pass

6. Login to the target machine and check the docker container with ps command

docker ps

7. From the target machine you can check the Docker network with ls command

docker network ls

8. Open the control machine terminal and enter 'http://192.168.18.22:8080/public_html/' to access the website deployed inside the docker container.