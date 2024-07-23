# Install approval bot dependencies
npm install

# Install docs dependencies
cd docs
npm install
cd ..

# Install Ansible tooling
pip install ansible==10.2.0 ansible-lint==24.7.0

# Install ansible script dependencies
cd ansible-cics-sdv-pipeline
pip install -r requirements.txt

