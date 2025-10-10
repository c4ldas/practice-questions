window.quizData = [
  {
    "question": "When\n multiple arguments with single-line values appear on consecutive lines \nat the same nesting level, HashiCorp recommends that you:",
    "options": [
      "<pre><code>name = \"www.example.com\"\nrecords = [ aws_eip.lb.public_ip ]\ntype = \"A\"\nttl = \"300\"\nzone_id = aws_route53_zone.primary.zone_id\n</code></pre>",
      "<pre><code>type = \"A\"\nttl = \"300\"\nzone_id = aws_route53_zone.primary.zone_id\n</code></pre>",
      "<pre><code>ami = \"abc123\"\ninstance_type = \"t2.micro\"\n</code></pre>",
      "<pre><code>ami = var.aws_ami\ninstance_type = var.instance_size\nsubnet_id = \"subnet-0bb1c79de3EXAMPLE\"\ntags = {\n  Name = \"HelloWorld\"\n}\n</code></pre>"
    ],
    "answer": 2
  },
  {
    "question": "You are adding a new variable to your configuration. <br/>Which of the following is NOT a valid variable type in Terraform?",
    "options": [
      "bool",
      "float",
      "string",
      "number",
      "map"
    ],
    "answer": 1
  },
  {
    "question": "Understanding how indexes work is essential when working with different variable types and resource blocks that use count or for_each. <br/>Therefore, what is the output value of the following code snippet? <pre><code>\nvariable \"candy_list\" {\n type = list (string)\n default = [ \"snickers\" , \"kitkat\" , \"reeces\" , \"m&ms\" ] \n} \n\noutput \"give_me_candy\" {\n value = element (var.candy_list, 2) \n}</code></pre>",
    "options": [
      "kitkat",
      "m&ms",
      "reeces",
      "snickers"
    ],
    "answer": 2
  },
  {
    "question": "From the code below, identify the implicit dependency: <pre><code>\nresource \"aws_eip\" \"public_ip\" {\n vpc      = true\n instance = aws_instance.web_server.id \n} \n\nresource \"aws_instance\" \"web_server\" {\n ami           = \"ami-2757f631\"\n instance_type = \"t2.micro\"\n depends_on    = [ aws_s3_bucket.company_data ] \n}\n\n</pre></code>",
    "options": [
      "The AMI used for the EC2 instance",
      "The EIP with an id of ami-2757f631",
      "The S3 bucket labeled company_data",
      "The EC2 instance labeled web_server"
    ],
    "answer": 3
  },
  {
    "question": "In Terraform, most resource dependencies are handled automatically. Which of the following statements best describes how Terraform resource dependencies are handled?",
    "options": [
      "Terraform analyzes any expressions within a resource block to find references to other objects and treats those references as implicit ordering requirements when creating, updating, or destroying resources.",
      "Resource dependencies are identified and maintained in a file called <code class='inline'>resource.dependencies</code>. Each terraform provider is required to maintain a list of all resource dependencies for the provider and it's included with the plugin during initialization when <code class='inline'>terraform init</code> is executed. The file is located in the <code class='inline'>terraform.d</code> folder.",
      "Resource dependencies are handled automatically by the <code class='inline'>depends_on</code> meta-argument, which is set to true by default.",
      "The Terraform binary contains a built-in reference map of all defined Terraform resource dependencies. Updates to this dependency map are reflected in Terraform versions. To ensure you are working with the latest resource dependency map you much be running the latest version of Terraform."
    ],
    "answer": 0
  },
  {
    "question": "Freddy and his co-worker Jason are deploying resources in GCP using Terraform for their team. After resources have been deployed, they must destroy the cloud-based resources to save on costs. <br/>However, two other team members, Michael and Chucky, are using a Cloud SQL instance for testing and request to keep it running. How can Freddy and Jason destroy all other resources without negatively impacting the database?",
    "options": [
      "run a <code class='inline'>terraform destroy</code>, modify the configuration file to include only the Cloud SQL resource, and then run a <code class='inline'>terraform apply</code>",
      "delete the entire state file using the <code class='inline'>terraform state rm</code> command and manually delete the other resources in GCP",
      "run a <code class='inline'>terraform state rm</code> command to remove the Cloud SQL instance from Terraform management before running the <code class='inline'>terraform destroy</code> command",
      "take a snapshot of the database, run a <code class='inline'>terraform destroy</code>, and then recreate the database in the GCP console by restoring the snapshot"
    ],
    "answer": 2
  },
  {
    "question": "You are writing Terraform to deploy resources, and have included provider blocks as shown below: <pre><code>provider \"aws\" {\n region = \"us-east-1\" \n} \n\nprovider \"aws\" {\n region = \"us-west-1\" \n}</code></pre> When you validate the Terraform configuration, you get the following error: \n<pre><code>Error: Duplicate provider configuration\n on main.tf line 5:\n 5: provider \"aws\" { \n\nA default provider configuration for \"aws\" was already given at \nmain.tf:1,1-15. If multiple configurations are required, set the xxxx \nargument for alternative configurations.</code></pre> What additional parameter is required to use multiple provider blocks of the\n same type, but with distinct configurations, such as cloud regions, \nnamespaces, or other desired settings?",
    "options": [
      "alias",
      "label",
      "multi",
      "version"
    ],
    "answer": 0
  },
  {
    "question": "Which are some of the benefits of using Infrastructure as Code in an organization? (select three)",
    "options": [
      "IaC allows you to commit your configurations to version control to safely collaborate on infrastructure",
      "IaC code can be used to manage infrastructure on multiple cloud platforms",
      "IaC is written as an imperative approach, where specific commands need to be executed in the correct order",
      "IaC uses a human-readable configuration language to help you write infrastructure code quickly"
    ],
    "answers": [0, 1, 3]
  },
  {
    "question": "A \"backend\" in Terraform determines how state is loaded and how an operation such as apply is executed. Which of the following is not a supported backend type?",
    "options": [
      "github",
      "local",
      "s3",
      "consul"
    ],
    "answer": 0
  },
  {
    "question": "Which of the following statements represents the most accurate statement about the Terraform language?",
    "options": [
      "Terraform is an immutable, declarative, Infrastructure as Code provisioning language based on Hashicorp Configuration Language, or optionally JSON.",
      "Terraform is an immutable, imperative, Infrastructure as Code configuration management language based on Hashicorp Configuration Language, or optionally JSON.",
      "Terraform is a mutable, imperative, Infrastructure as Code provisioning language based on Hashicorp Configuration Language, or optionally YAML.",
      "Terraform is a mutable, declarative, Infrastructure as Code configuration management language based on Hashicorp Configuration Language, or optionally JSON."
    ],
    "answer": 0
  },
  {
    "question": "Anyone can publish and share modules on the <code class='inline'>Terraform Public Registry</code>, and meeting the requirements for publishing a module is extremely easy. <br/>What are some of the requirements that must be met in order to publish a module on the Terraform Public Registry? (select three)",
    "options": [
      "The module must be PCI/HIPPA compliant.",
      "Module repositories must use this three-part name format, <code class='inline'>terraform-&lt;PROVIDER&gt;-&lt;NAME&gt;</code>.",
      "The registry uses tags to identify module versions. Release tag names must be for the format x.y.z, and can optionally be prefixed with a <code class='inline'>v</code>.",
      "The module must be on GitHub and must be a public repo."
    ],
    "answers": [1, 2, 3]
  },
  {
    "question": "What is the correct syntax for defining a list of strings for a variable in Terraform?",
    "options": [
      "variable \"public_subnets\" {\n description = \"The number of public subnets for VPC\"\n type        = list(string)\n default     = 2\n}",
      "variable \"public_subnet_cidr_blocks\" {\n type = list(string)\n default = [\n  \"10.0.1.0/24\",\n  \"10.0.1.0/24\",\n  \"10.0.1.0/24\",\n  \"10.0.1.0/24\",\n ]\n}",
      "variable \"aws_region\" {\n description = \"AWS region\"\n type        = list(string)\n default     = \"us-west-1\"\n}",
      "variable \"resource_tags\" {\ndescription = \"Tags to set for all resources\"\n type       = list(string)\n default    = {\n  project = \"exam-prep\",\n  environment = \"prod\"\n  instructor = \"krausen\"\n }\n}"
    ],
    "answer": 1
  },
  {
    "question": "In the following code snippet, the type of Terraform block is identified by which string? <pre><code>resource \"aws_instance\" \"db\" {\n ami           = \"ami-123456\"\n instance_type = \"t2.micro\" \n}</code></pre>",
    "options": [
      "resource",
      "t2.micro",
      "instance_type",
      "db"
    ],
    "answer": 0
  },
  {
    "question": "Which Terraform command will check and report errors within modules, attribute names, and value types to ensure they are syntactically valid and internally consistent?",
    "options": [
      "<code class='inline'>terraform show</code>",
      "<code class='inline'>terraform format</code>",
      "<code class='inline'>terraform validate</code>",
      "<code class='inline'>terraform fmt</code>"
    ],
    "answer": 2
  },
  {
    "question": "Which of the following variable declarations is going to result in an error?",
    "options": [
      "variable \"example\" {\n description = \"This is a variable description\"\n type       = list(string)\n default    = {}\n}",
      "variable \"example\" {}",
      "variable \"example\" {\n description = \"This is a test\"\n type        = map\n default     = {\"one\" = 1, \"two\" = 2, \"Three\" = \"3\"}\n}",
      "variable \"docker_ports\" {\n type = list(object({\n  internal = number\n  external = number\n  protocol = string\n }))\n}"
    ],
    "answer": 0
  },
  {
    "question": "You are using a Terraform Cloud workspace linked to a GitHub repo to manage production workloads in your environment. <br/>After approving a merge request, what default action can you expect to be triggered on the workspace?",
    "options": [
      "Terraform Cloud will automatically execute a <code class='inline'>terraform destroy</code> operation on your production workloads, and apply the new committed code stored in the GitHub repo",
      "The workspace will run a speculative plan and automatically apply the changes without any required interaction from the user",
      "A speculative plan will be run to show the potential changes to the managed environment and validate the changes against any applicable Sentinel policies",
      "The workspace will trigger a set of tests, such as <code class='inline'>terratest</code> and <code class='inline'>terraform validate</code>, to ensure the code is valid and can be successfully executed by the specific version of Terraform configured for the workspace."
    ],
    "answer": 2
  },
  {
    "question": "Henry has been working on automating his Azure infrastructure for a new application using Terraform. <br/>His application runs successfully, but he has added a new resource to create a DNS record using the new Infoblox provider. <br/>He has added the new resource but gets an error when he runs <code class='inline'>terraform plan</code>. <br/>What should Henry do first before running a <code class='inline'>plan</code> and <code class='inline'>apply</code>?",
    "options": [
      "the Azure plugin doesn't support Infoblox directly, so Henry needs to put the DNS resource in another configuration file",
      "since a new provider has been introduced, <code class='inline'>terraform init</code> needs to be run to download the Infoblox plugin",
      "Henry should run a <code class='inline'>terraform plan -refresh=true</code> to update the state for the new DNS resource",
      "you can't mix resources from different providers within the same configuration file, so Henry should create a module for the DNS resource and reference it from the main configuration"
    ],
    "answer": 1
  },
  {
    "question": "In order to reduce the time it takes to provision resources, Terraform uses parallelism. By default, how many resources will Terraform provision concurrently during a <code class='inline'>terraform apply</code>?",
    "options": [
      "5",
      "20",
      "50",
      "10"
    ],
    "answer": 3
  },
  {
    "question": "Why might a user opt to include the following snippet in their configuration file? <pre><code>terraform {\n required_version = \">= 1.9.2\" \n}</code></pre>",
    "options": [
      "this ensures that all Terraform providers are above a certain version to match the application being deployed",
      "The user wants to specify the minimum version of Terraform that is required to run the configuration",
      "The user wants to ensure that the application being deployed is a minimum version of 1.9.2",
      "versions before Terraform 1.9.2 were not approved by HashiCorp to be used in production"
    ],
    "answer": 1
  },
  {
    "question": "You are developing a new Terraform module to demonstrate features of the most popular HashiCorp products. You need to spin up an AWS instance for each tool, so you create the resource block as shown below using the <code class='inline'>for_each</code> meta-argument. <pre><code>resource \"aws_instance\" \"bryan-demo\" {\n # ...\n for_each = {\n  \"terraform\": \"infrastructure\",\n  \"vault\":     \"security\",\n  \"consul\":    \"connectivity\",\n  \"nomad\":     \"scheduler\" ,\n } \n}</code></pre> After the deployment, you view the state using the <code class='inline'>terraform state</code> list command. What resource address would be displayed for the instance related to <code class='inline'>vault</code>?",
    "options": [
      "<code class='inline'>aws_instance.bryan-demo[\"vault\"]</code>",
      "<code class='inline'>aws_instance.bryan-demo[\"2\"]</code>",
      "<code class='inline'>aws_instance.bryan-demo.vault</code>",
      "<code class='inline'>aws_instance.bryan-demo[1]</code>"
    ],
    "answer": 0
  },
  {
    "question": "Harry has deployed resources on Azure using Terraform. However, he has discovered that his co-workers Ron and Ginny have manually created a few resources using the Azure console. <br/>Since it is company policy to manage production workloads using IaC, how can Harry bring these resources under Terraform management without negatively impacting the availability of the deployed resources?",
    "options": [
      "rewrite the Terraform configuration file to deploy new resources, run a <code class='inline'>terraform apply</code>, and migrate users to the newly deployed resources. Manually delete the other resources created by Ron and Ginny.",
      "use <code class='inline'>terraform import</code> or the <code class='inline'>import</code> block to import the existing resources under Terraform management",
      "run a <code class='inline'>terraform get</code> to retrieve other resources that are not under Terraform management",
      "resources created outside of Terraform cannot be managed by Terraform"
    ],
    "answer": 1
  },
  {
    "question": "Terraform is distributed as a single binary and available for many different platforms. <br/>Select all operating systems that Terraform is available for. (select five)",
    "options": [
      "Windows",
      "AIX",
      "macOS",
      "Solaris",
      "FreeBSD",
      "Linux"
    ],
    "answers": [0, 2, 3, 4, 5]
  },
  {
    "question": "True or False? Using the latest versions of Terraform, <code class='inline'>terraform init</code> cannot automatically download community providers. <br/><img width='700' src='img/community_providers.jpg' alt='Community Providers' />",
    "options": [
      "False",
      "True"
    ],
    "answer": 0
  },
  {
    "question": "What Terraform command will launch an interactive console to evaluate and experiment with expressions?",
    "options": [
      "<code class='inline'>terraform cmdline</code>",
      "<code class='inline'>terraform console</code>",
      "<code class='inline'>terraform cli</code>",
      "<code class='inline'>terraform get</code>"
    ],
    "answer": 1
  },
  {
    "question": "What Terraform command can be used to manually unlock the state for the defined configuration?",
    "options": [
      "<code class='inline'>terraform unlock</code>",
      "<code class='inline'>terraform force-unlock</code>",
      "<code class='inline'>terraform state-unlock</code>",
      "<code class='inline'>Removing the lock on a state file is not possible</code>"
    ],
    "answer": 1
  },
  {
    "question": "After many years of using Terraform Community (Free), you decide to migrate to Terraform Cloud. After the initial configuration, you create a workspace and migrate your existing state and configuration. <br/>What Terraform version would the new workspace be configured to use after the migration?",
    "options": [
      "the most recent version of Terraform available",
      "whatever version is defined in the <code class='inline'>terraform</code> block",
      "the same Terraform version that was used to perform the migration",
      "the latest major release of Terraform"
    ],
    "answer": 2
  },
  {
    "question": "Terraform Cloud is more powerful when you integrate it with your version control system (VCS) provider. <br/>Select all the supported VCS providers from the answers below. (select four)",
    "options": [
      "Bitbucket Cloud",
      "GitHub Enterprise",
      "Azure DevOps Server",
      "CVS Version Control",
      "GitHub.com"
    ],
    "answers": [0, 1, 2, 4]
  },
  {
    "question": "A user runs <code class='inline'>terraform init</code> on their RHEL-based server, and per the output, two provider plugins are downloaded: <pre><code>$ terraform init \n\nInitializing the backend... \n\nInitializing provider plugins... \n- Checking for available provider plugins... \n- Downloading plugin for provider \"aws\" (hashicorp/aws) 2.44.0... \n- Downloading plugin for provider \"random\" (hashicorp/random) 2.2.1... \n\nTerraform has been successfully initialized! </code></pre>Where are these plugins downloaded and stored on the server?",
    "options": [
      "The <code class='inline'>.terraform.plugins</code> directory in the current working directory",
      "The <code class='inline'>.terraform/providers</code> directory in the current working directory",
      "<code class='inline'>/etc/terraform/plugins</code>",
      "The <code class='inline'>.terraform.d</code> directory in the current working directory"
    ],
    "answer": 1
  },
  {
    "question": "When using constraint expressions to signify a version of a provider, which of the following are valid provider versions that satisfy the expression found in the following code snippet: (select two) <pre><code>terraform {\n required_providers {\n  aws = {\n   source = \"hashicorp/aws\"\n   version ~> \"5.36.0\" \n  }\n } \n}</code></pre>",
    "options": [
      "AWS provider version: <code class='inline'>5.36.3</code>",
      "AWS provider version: <code class='inline'>5.37.0</code>",
      "AWS provider version: <code class='inline'>5.36.9</code>",
      "AWS provider version: <code class='inline'>5.3.1</code>"
    ],
    "answers": [0, 2]
  },
  {
    "question": "Emma is a Terraform expert, and she has automated <em>all the things</em> with Terraform. A virtual machine was provisioned during a recent deployment, but a local script did not work correctly. As a result, the virtual machine needs to be destroyed and recreated. <br/>How can Emma quickly have Terraform recreate <em>the one resource</em> without having to destroy everything that was created?",
    "options": [
      "use <code class='inline'>terraform import</code> to import the error so Terraform is aware of the problem",
      "use <code class='inline'>terraform state rm aws_instance.web</code> to remove the resource from the state file, which will cause Terraform to recreate the instance again",
      "use <code class='inline'>terraform apply -replace=aws_instance.web</code> to mark the virtual machine for replacement",
      "use <code class='inline'>terraform refresh</code> to refresh the state and make Terraform aware of the error"
    ],
    "answer": 2
  },
  {
    "question": "Provider dependencies are created in several different ways. Select the valid provider dependencies from the following list: (select three)",
    "options": [
      "Explicit use of a provider block in configuration, optionally including a version constraint.",
      "Existence of any provider plugins found locally in the working directory.",
      "Existence of any resource instance belonging to a particular provider in the current <em>state</em>.",
      "Use of any resource block or data block in the configuration, belonging to a particular provider"
    ],
    "answers": [0, 2, 3]
  },
  {
    "question": "When writing Terraform code, how many spaces between each nesting level does HashiCorp recommend that you use?",
    "options": [
      "1",
      "2",
      "5",
      "4"
    ],
    "answer": 1
  },
  {
    "question": "True or False? <br/>Rather than use a state file, Terraform can inspect cloud resources on every run to validate that the real-world resources match the desired state.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following is a <em>valid</em> variable name in Terraform?",
    "options": [
      "count",
      "invalid",
      "lifecycle",
      "version"
    ],
    "answer": 1
  },
  {
    "question": "In the example below, the <code class='inline'>depends_on</code> argument creates what type of dependency? <pre><code>resource \"aws_instance\" \"example\" {\n ami           = \"ami-2757f631\"\n instance_type = \"t2.micro\"\n depends_on    = [aws_s3_bucket.company_data] \n}</code></pre>",
    "options": [
      "internal dependency",
      "explicit dependency",
      "non-dependency resource",
      "implicit dependency"
    ],
    "answer": 1
  },
  {
    "question": "Environment variables can be used to set the value of input variables. The environment variables must be in the format <code class='inline'>\"____\"_&lt;variablename&gt;</code>. Select the correct prefix string from the following list.",
    "options": [
      "<code class='inline'>TF_VAR_VALUE</code>",
      "<code class='inline'>TF_VAR</code>",
      "<code class='inline'>TF_ENV</code>",
      "<code class='inline'>TF_ENV_VAR</code>"
    ],
    "answer": 1
  },
  {
    "question": "You are using Terraform to deploy some cloud resources and have developed the following code. However, you receive an error when trying to provision the resource. Which of the following answers fixes the syntax of the Terraform code? <pre><code>resource \"aws_security_group\" \"vault_elb\" {\n name        = \"${var.name_prefix}-vault-elb\" \n description = Vault ELB \n vpc_id      = var.vpc_id \n}</code></pre>",
    "options": [
      "resource \"aws_security_group\" \"vault_elb\" {\n name        = \"${var.name_prefix}-vault-elb\"\n description = var_Vault ELB\n vpc_id      = var.vpc_id\n}",
      "resource \"aws_security_group\" \"vault_elb\" {\n name        = \"${var.name_prefix}-vault-elb\"\n description = [Vault ELB]\n vpc_id      = var.vpc_id\n}",
      "resource \"aws_security_group\" \"vault_elb\" {\n name        = \"${var.name_prefix}-vault-elb\"\n description = \"${Vault ELB}\"\n vpc_id      = var.vpc_id\n}",
      "resource \"aws_security_group\" \"vault_elb\" {\n name        = \"${var.name_prefix}-vault-elb\"\n description = \"Vault ELB\"\n vpc_id      = var.vpc_id\n}"
    ],
    "answer": 3
  },
  {
    "question": "You are performing a code review of a colleague's Terraform code and see the following code. Where is this module stored? <pre><code>module \"vault-aws-tgw\" { \n source         = \"terraform-vault-aws-tgw/hcp\" \n version        = \"1.0.0\" \n client_id      = \"4djlsn29sdnjk2btk\" \n hvn_id         = \"a4c9357ead4de\" \n route_table_id = \"rtb-a221958bc5892eade331\" \n}</code></pre>",
    "options": [
      "the Terraform public registry",
      "in a Terraform Cloud private registry",
      "a local code repository on your network",
      "in a local file under a directory named <code class='inline'>terraform/vault-aws-tgw/hcp</code>"
    ],
    "answer": 0
  },
  {
    "question": "A user has created three workspaces using the command line - <code class='inline'>prod</code>, <code class='inline'>dev</code>, and <code class='inline'>test</code>. The user wants to create a fourth workspace named <code class='inline'>stage</code>. <br/>Which command will the user execute to accomplish this task?",
    "options": [
      "<code class='inline'>terraform workspace -new stage</code>",
      "<code class='inline'>terraform workspace create stage</code>",
      "<code class='inline'>terraform workspace -create stage</code>",
      "<code class='inline'>terraform workspace new stage</code>"
    ],
    "answer": 3
  },
  {
    "question": "Why might users want to utilize Sentinel or OPA with Terraform Cloud in their infrastructure workflow? (select four)",
    "options": [
      "Sentinel and OPA enable automated policy checks to enforce compliance standards before applying changes to production environments",
      "Organizations can enforce resource naming conventions or approved machine images for improved consistency and clarity",
      "Sentinel and OPA can enhance security by preventing unauthorized changes to your managed infrastructure",
      "To provide real-time feedback on potential security risks in Terraform configurations during the development process",
      "To allow users to bypass version control and directly apply changes to production"
    ],
    "answers": [0, 1, 2, 3]
  },
  {
    "question": "What environment variable can be set to enable detailed logging for Terraform?",
    "options": [
      "<code class='inline'>TF_TRACE</code>",
      "<code class='inline'>TF_DEBUG</code>",
      "<code class='inline'>TF_LOG</code>",
      "<code class='inline'>TF_INFO</code>"
    ],
    "answer": 2
  },
  {
    "question": "Where does Terraform Community (Free) store the <em>local</em> state for workspaces?",
    "options": [
      "directory called <code class='inline'>terraform.tfstate.d/&lt;workspace name&gt</code>",
      "a file called <code class='inline'>terraform.tfstate.backup</code>",
      "directory called <code class='inline'>terraform.workspaces.tfstate</code>",
      "a file called <code class='inline'>terraform.tfstate</code>"
    ],
    "answer": 0
  },
  {
    "question": "What tasks can the <code class='inline'>terraform state</code> command be used for in Terraform?",
    "options": [
      "modify the current state, such as removing items",
      "create a new state file",
      "refresh the existing state",
      "there is no such command"
    ],
    "answer": 0
  },
  {
    "question": "Which code snippet would allow you to retrieve information about existing resources and use that information within your Terraform configuration?",
    "options": [
      "locals {\n service_name = \"forum\"\n owner        = \"Community Team\"\n}",
      "provider \"google\" {\n project = \"acme-app\"\n region  = \"us-central1\"\n}",
      "module \"deploy-servers\" {\n source  = \"./app-cluster\"\n servers = 5\n}",
      "data \"aws_ami\" \"aws_instance\" { \n most_recent = true \n owners      = [\"self\"] \n\n tags = {  \n  Name   = \"app-server\"\n  Tested = \"true\"\n }\n}",
      "resource \"aws_instance\" \"web\" {\n ami           = \"ami-a1b2c3d4\"\n instance_type = \"t2.micro\"\n}"
    ],
    "answer": 3
  },
  {
    "question": "You and a colleague are working on updating some Terraform configurations within your organization. You need to follow a new naming standard for the local name within your resource blocks. However, you don't want \nTerraform to replace the object after changing your configuration files. <br/>As an example, you want to change <code class='inline'>data-bucket</code> to now be <code class='inline'>prod-encrypted-data-s3-bucket</code> in the following resource block: <pre><code>resource \"aws_s3_bucket\" \"data-bucket\" {\n bucket = \"corp-production-data-bucket\" \n tags = {\n  Name        = \"corp-production-data-bucket\"\n  Environment = \"prod\"\n } \n}</code></pre> After\n updating the resource block, what command would you run to update the local name while ensuring Terraform does not replace the existing resource?",
    "options": [
      "<code class='inline'>terraform state mv aws_s3_bucket.data-bucket aws_s3_bucket.prod-encrypted-data-s3-bucket</code>",
      "<code class='inline'>terraform apply -refresh-only</code>",
      "<code class='inline'>terraform apply -replace aws_s3_bucket.data-bucket</code>",
      "<code class='inline'>terraform state rm aws_s3_bucket.data-bucket</code>"
    ],
    "answer": 0
  },
  {
    "question": "Sara has her entire application automated using Terraform, but she needs to start automating more infrastructure components, such as creating a new subnet, DNS record, and load balancer. Sara wants to create these new resources using modules so she easily reuse the code. However, Sara is having problems getting the <code class='inline'>subnet_id</code> from the <em>subnet</em> module to pass to the <em>load balancer</em> module. <br/>modules/subnet.tf: <pre><code>resource \"aws_subnet\" \"bryan\" {\n vpc_id     = aws_vpc.krausen.id \n cidr_block = \"10.0.1.0/24\" \n\n tags = {\n  Name = \"Krausen Subnet\"\n }\n}</code></pre> What could fix this problem?",
    "options": [
      "references to resources that are created within a module cannot be used within other modules",
      "publish the module to a Terraform registry first",
      "add an <code class='inline'>output</code> block to the <em>subnet</em> module and retrieve the value using <code class='inline'>module.subnet.subnet_id</code> for the <em>load balancer</em> module",
      "move the <em>subnet</em> and <em>load balancer</em> resource into the main configuration file so they can easily be referenced"
    ],
    "answer": 2
  },
  {
    "question": "What do the declarations, such as <code class='inline'>name</code>, <code class='inline'>cidr</code>, and <code class='inline'>azs</code>, in the following Terraform code represent and what purpose do they serve? <pre><code>module \"vpc\" {\n source  = \"terraform-aws-modules/vpc/aws\" \n version = \"5.7.0\" \n\n name = var.vpc_name \n cidr = var.vpc_cidr \n\n azs             = var.vpc_azs \n private_subnets = var.vpc_private_subnets \n public_subnets  = var.vpc_public_subnets \n\n enable_nat_gateway = var.vpc_enable_nat_gateway \n\n tags = var.vpc_tags \n}</code></pre>",
    "options": [
      "the <code class='inline'>value</code> of these variables will be obtained from values created within the child module",
      "these are where the <code class='inline'>variable declarations</code> are created so Terraform is aware of these variables within the calling module",
      "these are <code class='inline'>variables</code> that are passed into the child module likely used for resource creation",
      "these are the <code class='inline'>outputs</code> that the child module will return"
    ],
    "answer": 2
  },
  {
    "question": "Oscar is modifying his Terraform configuration file but isn't 100% sure it's correct. He is afraid that changes made could negatively affect production workloads. <br/>How can Oscar validate the changes that will be made without impacting existing workloads?",
    "options": [
      "run <code class='inline'>terraform refresh</code> to compare his existing configuration file against the current one",
      "run a <code class='inline'>terraform plan</code> and validate the changes that will be made",
      "run a <code class='inline'>terraform validate</code> to ensure the changes won't impact the production workloads",
      "run <code class='inline'>terraform apply -lock=false</code> when executing the the changes made to the configuration"
    ],
    "answer": 1
  },
  {
    "question": "What feature of Terraform Cloud allows you to publish and maintain a set of custom modules that can only be used within your organization?",
    "options": [
      "custom VCS integration",
      "remote runs",
      "private registry",
      "Terraform registry"
    ],
    "answer": 2
  },
  {
    "question": "True or False? <br/>The <code class='inline'>terraform plan -refresh-only</code> command is used to create a plan whose goal is only to update the Terraform state to match any changes made to remote objects outside of Terraform.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "question": "While Terraform is generally written using the HashiCorp Configuration Language (HCL). What other syntax can Terraform be expressed in?",
    "options": [
      "XML",
      "JSON",
      "YAML",
      "TypeScript"
    ],
    "answer": 1
  },
  {
    "question": "True or False? <br/>By default, the <code class='inline'>terraform destroy</code> command will prompt the user for confirmation before proceeding.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1
  },
  {
    "question": "When you add a new module to a configuration, Terraform must download it before it can be used. What two commands can be used to download and update modules? (select two)",
    "options": [
      "<code class='inline'>terraform plan</code>",
      "<code class='inline'>terraform init</code>",
      "<code class='inline'>terraform refresh</code>",
      "<code class='inline'>terraform get</code>"
    ],
    "answers": [1, 3]
  },
  {
    "question": "True or False? <br/>When using the Terraform provider for Vault, the tight integration between these HashiCorp tools provides the ability to mask secrets in the state file.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1
  },
  {
    "question": "A user creates three workspaces from the command line: <code class='inline'>prod</code>, <code class='inline'>dev</code>, and <code class='inline'>test</code>. Which of the following commands will the user run to switch to the dev workspace?",
    "options": [
      "<code class='inline'>terraform workspace -switch dev</code>",
      "<code class='inline'>terraform workspace switch dev</code>",
      "<code class='inline'>terraform workspace select dev</code>",
      "<code class='inline'>terraform workspace dev</code>"
    ],
    "answer": 2
  },
  {
    "question": "True or False? <br/>Each Terraform workspace uses its own state file to manage the infrastructure associated with that particular workspace.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "question": "True or False? <br/>The following code is an example of an implicit dependency in Terraform <pre><code>resource \"aws_instance\" \"web\" {\n ami           = \"ami-0c55b159cbfafe1f0\" \n instance_type = \"t2.micro\" \n} \n\nresource \"aws_ebs_volume\" \"data\" {\n availability_zone = \"us-west-2a\" \n size              = 1 \n\n tags = {\n  Name = \"data-volume\" \n } \n} \n \nresource \"aws_volume_attachment\" \"attach_data_volume\" {\n device_name = \"/dev/xvdf\" \n volume_id   = aws_ebs_volume.data.id \n instance_id = aws_instance.web.id \n}</code></pre>",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "question": "By default, a child module will have access to all variables set in the calling (parent) module.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1
  },
  {
    "question": "After executing a <code class='inline'>terraform plan</code>, you notice that a resource has a tilde (~) next to it. What does this mean?",
    "options": [
      "the resource will be created",
      "the resource will be updated in place",
      "the resource will be destroyed and recreated",
      "Terraform can't determine how to proceed due to a problem with the state file"
    ],
    "answer": 1
  },
  {
    "question": "What does the command <code class='inline'>terraform fmt</code> do?",
    "options": [
      "deletes the existing configuration file",
      "formats the state file in order to ensure the latest state of resources can be obtained",
      "rewrite Terraform configuration files to a canonical format and style",
      "updates the font of the configuration file to the official font supported by HashiCorp"
    ],
    "answer": 2
  },
  {
    "question": "Given the Terraform configuration below, which order will the resources be created?<pre><code>resource \"aws_instance\" \"web_server\" {\n    ami = \"i-abdce12345\"\n    instance_type = \"t2.micro\"\n}\n \nresource \"aws_eip\" \"web_server_ip\" { \n    vpc = true \n    instance = aws_instance.web_server.id \n}</code></pre>",
    "options": [
      "no resources will be created",
      "<code class='inline'>aws_instance</code> will be created first\n<code class='inline'>aws_eip</code> will be created second",
      "resources will be created in parallel",
      "<code class='inline'>aws_eip</code> will be created first\n<code class='inline'>aws_instance</code> will be created second"
    ],
    "answer": 1
  },
  {
    "question": "What Terraform feature is shown in the example below?<pre><code> resource \"aws_security_group\" \"example\" {\n  name = \"sg-app-web-01\"\n \n  dynamic \"ingress\" {\n    for_each = var.service_ports\n    content {\n      from_port = ingress.value\n      to_port   = ingress.value\n      protocol  = \"tcp\"\n    }\n  }\n}</code></pre>",
    "options": [
      "data source",
      "dynamic block",
      "local values",
      "conditional expression"
    ],
    "answer": 1
  },
  {
    "question": "When configuring a remote backend in Terraform, it might be a good idea to purposely omit some of the required arguments to ensure secrets and other relevant data are not inadvertently shared with others. What alternatives are available to provide the remaining values to Terraform to initialize and communicate with the remote backend? (select three)",
    "options": [
      "use the <code class='inline'>-backend-config=PATH</code> flag to specify a separate config file",
      "interactively on the command line",
      "directly querying HashiCorp Vault for the secrets",
      "command-line key/value pairs"
    ],
    "answers": [0, 1, 3]
  },
  {
    "question": "In order to make a Terraform configuration file dynamic and/or reusable, static values should be converted to use what?",
    "options": [
      "module",
      "regular expressions",
      "input variables",
      "output value"
    ],
    "answer": 2
  },
  {
    "question": "What happens when a <code class='inline'>terraform plan</code> is executed?",
    "options": [
      "applies the changes required in the target infrastructure in order to reach the desired configuration",
      "creates an execution plan and determines what changes are required to achieve the desired state in the configuration files.",
      "reconciles the state Terraform knows about with the real-world infrastructure",
      "the backend is initialized and the working directory is prepped"
    ],
    "answer": 1
  },
  {
    "question": "In regards to Terraform state file, select all the statements below which are correct: (select four)",
    "options": [
      "the Terraform state can contain sensitive data, therefore the state file should be protected from unauthorized access",
      "using the <code class='inline'>sensitive = true</code> feature, you can instruct Terraform to mask sensitive data in the state file",
      "storing state remotely can provide better security",
      "HCP Terraform always encrypts state at rest",
      "the state file is always encrypted at rest",
      "when using local state, the state file is stored in plain-text"
    ],
    "answers": [0, 2, 3, 5]
  },
  {
    "question": "In Terraform Cloud, a workspace can be mapped to how many VCS repos?",
    "options": [
      "1",
      "5",
      "2",
      "3"
    ],
    "answer": 0
  },
  {
    "question": "From the answers below, select the advantages of using Infrastructure as Code. (select four)",
    "options": [
      "Easily integrate with application workflows (GitHub Actions, Azure DevOps, CI/CD tools)",
      "Provide a codified workflow to develop customer-facing applications",
      "Safely test modifications using a \"dry run\" before applying any actual changes ",
      "Provide reusable modules for easy sharing and collaboration",
      "Easily change and update existing infrastructure "
    ],
    "answers": [0, 2, 3, 4]
  },
  {
    "question": "Which of the following actions are performed during a <code class='inline'>terraform init</code>? (select three)",
    "options": [
      " downloads the providers/plugins required to execute the configuration",
      "downloads the required modules referenced in the configuration",
      "provisions the declared resources in your configuration",
      "initializes the backend configuration"
    ],
    "answers": [0, 1, 3]
  },
  {
    "question": "You want to start managing resources that were not originally provisioned through infrastructure as code. Before you can import the resource's current state, what must you do before running the <code class='inline'>terraform import</code> command?",
    "options": [
      "modify the Terraform state file to add the new resources so Terraform will have a record of the resources to be managed",
      "update the Terraform configuration file to include the new resources that match the resources you want to import",
      "run <code class='inline'>terraform apply -refresh-only</code> to ensure that the state file has the latest information for existing resources.",
      "shut down or stop using the resources being imported so no changes are inadvertently missed"
    ],
    "answer": 1
  },
  {
    "question": "Which configuration block type is used to declare settings and behaviors specific to Terraform?",
    "options": [
      "<code class='inline'>resource</code> block",
      "<code class='inline'>provider</code> block",
      "<code class='inline'>data</code> block",
      "<code class='inline'>terraform</code> block"
    ],
    "answer": 3
  },
  {
    "question": "What advantages does Terraform offer over using a provider's native tooling for deploying resources in multi-cloud environments? (select three)",
    "options": [
      "Terraform is not cloud-agnostic and can only be used to deploy resources across a single public cloud at a time",
      "Terraform simplifies management and orchestration, helping operators build large-scale, multi-cloud infrastructure",
      "Terraform can manage cross-cloud dependencies",
      "Terraform can help businesses deploy applications on multiple clouds and on-premises infrastructure"
    ],
    "answers": [1, 2, 3]
  },
  {
    "question": "In the <code class='inline'>terraform</code> block, which configuration would be used to identify the specific version of a provider required?",
    "options": [
      "<code class='inline'>required-provider</code> ",
      "<code class='inline'>required_versions</code> ",
      "<code class='inline'>required-version</code> ",
      "<code class='inline'>required_providers</code> "
    ],
    "answer": 3
  },
  {
    "question": "Select two answers to complete the following sentence:\nBefore a new provider can be used, it must be ______ and _______. (select two)",
    "options": [
      "uploaded to source control",
      "approved by HashiCorp",
      "declared or used in a configuration file",
      "initialized"
    ],
    "answers": [2, 3]
  },
  {
    "question": "True or False? Workspaces provide similar functionality in the Community and Terraform Cloud versions of Terraform.",
    "options": [
      "False",
      "True"
    ],
    "answer": 0
  },
  {
    "question": "When using modules to deploy infrastructure, how would you export a value from one module to import into another module?\n<em>For example, a module dynamically deploys an application instance or virtual machine, and you need the IP address in another module to configure a related DNS record in order to reach the newly deployed application.</em>",
    "options": [
      "preconfigure the IP address as a parameter in the DNS module",
      "export the value using <code class='inline'>terraform export</code> and input the value using <code class='inline'>terraform input</code> ",
      "configure an output value in the application module in order to use that value for the DNS module",
      "configure the pertinent provider's configuration with a list of possible IP addresses to use"
    ],
    "answer": 2
  },
  {
    "question": "By default, where does Terraform Community/CLI store its state file?",
    "options": [
      "shared directory",
      "remotely using Terraform Cloud",
      "current working directory",
      "Amazon S3 bucket"
    ],
    "answer": 2
  },
  {
    "question": "After running into issues with Terraform, you need to enable verbose logging to assist with troubleshooting the error. Which of the following values provides the MOST verbose logging?",
    "options": [
      "<code class='inline'>DEBUG</code> ",
      "<code class='inline'>TRACE</code> ",
      "<code class='inline'>INFO</code> ",
      "<code class='inline'>WARN</code> ",
      "<code class='inline'>ERROR</code> "
    ],
    "answer": 1
  },
  {
    "question": "What happens when a <code class='inline'>terraform apply</code> command is executed?",
    "options": [
      "reconciles the state Terraform knows about with the real-world infrastructure",
      "applies the changes required in the target infrastructure in order to reach the desired configuration",
      "creates the execution plan for the deployment of resources",
      "the backend is initialized and the working directory is prepped"
    ],
    "answer": 1
  },
  {
    "question": "Which Terraform command will force a resource to be destroyed and recreated even if there are no configuration changes that would require it?",
    "options": [
      "<code class='inline'>terraform apply -refresh-only</code> ",
      "<code class='inline'>terraform fmt</code> ",
      "<code class='inline'>terraform destroy</code> ",
      "<code class='inline'>terraform apply -replace=&lt;address&gt;</code> "
    ],
    "answer": 3
  },
  {
    "question": "Which of the following is considered a Terraform plugin?",
    "options": [
      "Terraform logic",
      "Terraform tooling",
      "Terraform language",
      "Terraform provider"
    ],
    "answer": 3
  },
  {
    "question": "Select the answer below that completes the following statement:\nTerraform Cloud can be managed from the CLI but requires __________? ",
    "options": [
      "a TOTP token",
      "an API token",
      "authentication using MFA",
      "a username and password"
    ],
    "answer": 1
  },
  {
    "question": "True or False? Before installing and using Terraform, you must download and install Go as a prerequisite.",
    "options": [
      "False",
      "True"
    ],
    "answer": 0
  },
  {
    "question": "Your organization has moved to AWS and has manually deployed infrastructure using the console. Recently, a decision has been made to standardize on Terraform for all deployments moving forward.\nWhat can you do to ensure that the existing resources are managed by Terraform moving forward without causing interruption to existing resources?",
    "options": [
      "resources that are manually deployed in the AWS console cannot be imported by Terraform",
      "using <code class='inline'>terraform import</code>, import the existing infrastructure to bring the resources under Terraform management",
      "submit a ticket to AWS and ask them to export the state of all existing resources and use <code class='inline'>terraform import</code> to import them into the state file",
      "delete the existing resources and recreate them using new a Terraform configuration so Terraform can manage them moving forward"
    ],
    "answer": 1
  },
  {
    "question": "True or False? Multiple providers can be declared within a single Terraform configuration file.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "question": "When using variables in Terraform Cloud, what level of scope can the variable be applied to? (select three)",
    "options": [
      "All current and future workspaces in a project using a variable set",
      "Multiple workspaces using a variable set",
      "A specific Terraform run in a single workspace",
      "All workspaces across multiple Terraform Cloud organizations"
    ],
    "answers": [0, 1, 2]
  },
  {
    "question": "True or False? Similar to Terraform Community, you must use the CLI to switch between workspaces when using Terraform Cloud workspaces.",
    "options": [
      "False",
      "True"
    ],
    "answer": 0
  },
  {
    "question": "Frank has a file named <code class='inline'>main.tf</code> which is shown below. Which of the following statements are true about this code? (select two)<pre><code>module \"servers\" {\n  source = \"./modules/app-cluster\"\n \n  servers = 5\n}</code></pre>",
    "options": [
      "<code class='inline'>app-cluster</code> is the child module",
      "<code class='inline'>main.tf</code> is the child module",
      "<code class='inline'>app-cluster</code> is the calling module",
      "<code class='inline'>main.tf</code> is the calling module"
    ],
    "answers": [0, 3]
  },
  {
    "question": "Which of the following Terraform files should be ignored by Git when committing code to a repo? (select two)",
    "options": [
      "<code class='inline'>variables.tf</code> ",
      "<code class='inline'>terraform.tfstate</code> ",
      "<code class='inline'>terraform.tfvars</code> ",
      "<code class='inline'>outputs.tf</code> "
    ],
    "answers": [1, 2]
  },
  {
    "question": "When multiple engineers start deploying infrastructure using the same state file, what is a feature of remote state storage that is critical to ensure the state does not become corrupt?",
    "options": [
      "state locking",
      "workspaces",
      "object storage",
      "encryption"
    ],
    "answer": 0
  },
  {
    "question": "Stephen is writing brand new code and needs to ensure it is syntactically valid and internally consistent. Stephen doesn't want to wait for Terraform to access any remote services while making sure his code is valid. What command can he use to accomplish this?",
    "options": [
      "<code class='inline'>terraform show</code> ",
      "<code class='inline'>terraform validate</code> ",
      "<code class='inline'>terraform fmt</code> ",
      "<code class='inline'>terraform apply -refresh-only</code> "
    ],
    "answer": 1
  },
  {
    "question": "Published modules via the Terraform Registry provide which of the following benefits? (select four)",
    "options": [
      "allow browsing version histories",
      "support versioning",
      "support from any code repo",
      "show examples and READMEs",
      "automatically generated documentation"
    ],
    "answers": [0, 1, 3, 4]
  },
  {
    "question": "What Terraform command can be used to inspect the current state file?",
    "options": [
      "<code class='inline'>terraform show</code> ",
      "<code class='inline'>terraform state</code> ",
      "<code class='inline'>terraform inspect</code> ",
      "<code class='inline'>terraform read</code> "
    ],
    "answer": 0
  },
  {
    "question": "True or False? You can migrate the Terraform backend but only if there are no resources currently being managed.",
    "options": [
      "False",
      "True"
    ],
    "answer": 0
  },
  {
    "question": "You have been given requirements to create a security group for a new application. Since your organization standardizes on Terraform, you want to add this new security group with the fewest number of lines of code. What feature could you use to iterate over a list of required tcp ports to add to the new security group?",
    "options": [
      "dynamic block",
      "dynamic backend",
      "splat expression",
      "terraform import"
    ],
    "answer": 0
  },
  {
    "question": "What are the benefits of using Infrastructure as Code? (select five)",
    "options": [
      "Infrastructure as Code is easily repeatable, allowing the user to reuse code to deploy similar, yet different resources",
      "Infrastructure as Code easily replaces development languages such as Go and .Net for application development",
      "Infrastructure as Code is relatively simple to learn and write, regardless of a user's prior experience with developing code",
      "Infrastructure as Code provides configuration consistency and standardization among deployments",
      "Infrastructure as Code gives the user the ability to recreate an application's infrastructure for disaster recovery scenarios",
      "Infrastructure as Code allows a user to turn a manual task into a simple, automated deployment"
    ],
    "answers": [0, 2, 3, 4, 5]
  },
  {
    "question": "What are the core Terraform workflow steps to use infrastructure as code?",
    "options": [
      "<pre><code>1) Plan\n2) Apply\n3) Destroy</code></pre>",
      "<pre><code>1) Code\n2) Validate\n3) Apply</code></pre>",
      "<pre><code>1) Write\n2) Plan\n3) Apply</code></pre>",
      "<pre><code>1) Plan\n2) Apply\n3) Pray</code></pre>"
    ],
    "answer": 2
  },
  {
    "question": "Kristen is using modules to provision an Azure environment for a new application. She is using the following code to specify the version of her virtual machine module. Which of the following Terraform features supports the versioning of a module? (select two)<pre><code>module \"compute\" {\n  source  = \"azure/compute/azurerm\"\n  version = \"5.1.0\"\n \n  resource_group_name = \"production_web\"\n  vnet_subnet_id      = azurerm_subnet.aks-default.id \n}</code></pre>",
    "options": [
      "Terraform registry",
      "local file paths",
      "private registry",
      "modules stored in GitLab"
    ],
    "answers": [0, 2]
  },
  {
    "question": "In the example below, where is the value of the DNS record's IP address originating from?<pre><code>resource \"aws_route53_record\" \"www\" {\n  zone_id = aws_route53_zone.primary.zone_id\n  name    = \"www.helloworld.com\"\n  type    = \"A\"\n  ttl     = \"300\"\n  records = [module.web_server.instance_ip_addr]\n}</code></pre>",
    "options": [
      "value of the web_server parameter from the variables.tf file",
      "by querying the AWS EC2 API to retrieve the IP address",
      "the regular expression named module.web_server",
      "the output of a module named web_server"
    ],
    "answer": 3
  },
  {
    "question": "Which of the following best describes the default local backend?",
    "options": [
      "The local backend stores state on the local filesystem, locks the state using system APIs, and performs operations locally",
      "The local backend is how Terraform connects to public cloud services, such as AWS, Azure, or GCP",
      "The local backend is where Terraform stores logs to be processed by a log collector",
      "The local backend is the directory where resources deployed by Terraform have direct access to in order to update their current state"
    ],
    "answer": 0
  },
  {
    "question": "Which of the following describes the process of leveraging a local value within a Terraform module and exporting it for use by another module?",
    "options": [
      "Exporting the local value as an output from the first module, then importing it into the second module's configuration.",
      "Importing the local value directly into the second module's configuration.",
      "Defining the local value in the first module, then passing it as an argument to the second module.",
      "Using Terraform's built-in cross-module referencing feature to automatically share local values between modules."
    ],
    "answer": 0
  },
  {
    "question": "What are some problems with how infrastructure was traditionally managed before Infrastructure as Code? (select three)",
    "options": [
      "Traditional deployment methods are not able to meet the demands of the modern business where resources tend to live days to weeks, rather than months to years",
      "Requests for infrastructure or hardware often required a ticket, increasing the time required to deploy applications",
      "Traditionally managed infrastructure can't keep up with cyclic or elastic applications",
      "Pointing and clicking in a management console is a scalable approach and reduces human error as businesses are moving to a multi-cloud deployment model"
    ],
    "answers": [0, 1, 2]
  },
  {
    "question": "You found a module on the Terraform Registry that will provision the resources you need. What information can you find on the Terraform Registry to help you quickly use this module? (select three)",
    "options": [
      "Required Input Variables",
      "Dependencies to use the Module",
      "A list of Outputs",
      "A Download button to Quickly Get the Module Code"
    ],
    "answers": [0, 1, 2]
  },
  {
    "question": "Terraform language has built-in syntax for creating lists. Which of the following is the correct syntax to create a list in Terraform?",
    "options": [
      "<code class='inline'>[\"string1\", \"string2\", \"string3\"]</code> ",
      "<code class='inline'>(\"string1\", \"string2\", \"string3\")</code> ",
      "<code class='inline'>&lt;\"string1\", \"string2\", \"string3\"&gt;</code> ",
      "<code class='inline'>{\"string1\", \"string2\", \"string3\"}</code> "
    ],
    "answer": 0
  },
  {
    "question": "What are some of the features of Terraform state? (select three)",
    "options": [
      "inspection of cloud resources",
      "increased performance",
      "mapping configuration to real-world resources",
      "determining the correct order to destroy resources"
    ],
    "answers": [1, 2, 3]
  },
  {
    "question": "Rick is writing a new Terraform configuration file and wishes to use modules in order to easily consume Terraform code that has already been written. Which of the modules shown below will be created first?<pre><code>terraform {\n  required_providers {\n    aws = {\n      source = \"hashicorp/aws\"\n    }\n  }\n}\n \nprovider \"aws\" {\n  region = \"us-west-2\"\n}\n \nmodule \"vpc\" {\n  source  = \"terraform-aws-modules/vpc/aws\"\n  version = \"2.21.0\"\n \n  name = var.vpc_name\n  cidr = var.vpc_cidr\n \n  azs             = var.vpc_azs\n  private_subnets = var.vpc_private_subnets\n  public_subnets  = var.vpc_public_subnets\n \n  enable_nat_gateway = var.vpc_enable_nat_gateway\n  \n  tags = var.vpc_tags\n}\n \nmodule \"ec2_instances\" {\n  source  = \"terraform-aws-modules/ec2-instance/aws\"\n  version = \"2.12.0\"\n \n  name           = \"my-ec2-cluster\"\n  instance_count = 2\n \n  ami                    = \"ami-0c5204531f799e0c6\"\n  instance_type          = \"t2.micro\"\n  vpc_security_group_ids = [module.vpc.default_security_group_id]\n  subnet_id              = module.vpc.public_subnets[0]\n \n  tags = {\n    Terraform   = \"true\"\n    Environment = \"dev\"\n  }\n}</code></pre>",
    "options": [
      "<pre><code>module \"vpc\"</code></pre>",
      "<pre><code>module \"ec2_instances\"</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "True or False? State is a requirement for Terraform to function.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "question": "What is the downside to using Terraform to interact with sensitive data, such as reading secrets from Vault?",
    "options": [
      "secrets are persisted to the state file",
      "Terraform requires a unique auth method to work with Vault",
      "Terraform and Vault must be running on the same physical host",
      "Terraform and Vault must be running on the same version"
    ],
    "answer": 0
  },
  {
    "question": "Why is it a good idea to declare the required version of a provider in a Terraform configuration file?<pre><code>terraform {\n  required_providers {\n    aws = {\n      source = \"hashicorp/aws\"\n     version = \"3.57.0\"\n    }\n  }\n}</code></pre>",
    "options": [
      "providers are released on a separate schedule from Terraform itself; therefore, a newer version could introduce breaking changes",
      "to remove older versions of the provider",
      "to ensure that the provider version matches the version of Terraform you are using",
      "to match the version number of your application being deployed via Terraform"
    ],
    "answer": 0
  },
  {
    "question": "What is the best and easiest way for Terraform to read and write secrets from HashiCorp Vault?",
    "options": [
      "API access using the AppRole auth method",
      "integration with a tool like Jenkins",
      "Vault provider",
      "CLI access from the same machine running Terraform"
    ],
    "answer": 2
  },
  {
    "question": "Which of the following allows Terraform users to apply policy as code to enforce standardized configurations for resources being deployed via infrastructure as code?",
    "options": [
      "sentinel",
      "functions",
      "workspaces",
      "private"
    ],
    "answer": 0
  },
  {
    "question": "Using multi-cloud and provider-agnostic tools provides which of the following benefits? (select two)",
    "options": [
      "operations teams only need to learn and manage a single tool to manage infrastructure, regardless of where the infrastructure is deployed",
      "increased risk due to all infrastructure relying on a single tool for management",
      "slower provisioning speed allows the operations team to catch mistakes before they are applied",
      "can be used across major cloud providers and VM hypervisors"
    ],
    "answers": [0, 3]
  },
  {
    "question": "Terry is using a module to deploy some EC2 instances on AWS for a new project. He is viewing the code that is calling the module for deployment, which is shown below. Where is the value of the security group originating?<pre><code>module \"ec2_instances\" {\n  source  = \"terraform-aws-modules/ec2-instance/aws\"\n  version = \"4.3.0\"\n \n  name           = \"my-ec2-cluster\"\n  instance_count = 2\n \n  ami                    = \"ami-0c5204531f799e0c6\"\n  instance_type          = \"t2.micro\"\n  vpc_security_group_ids = [module.vpc.default_security_group_id]\n  subnet_id              = module.vpc.public_subnets[0]\n \n  tag = {\n    Terraform   = \"true\"\n    Environment = \"dev\"\n  }\n}</code></pre>",
    "options": [
      "an environment variable being using during a <code class='inline'>terraform apply</code> ",
      "the output of another module",
      "the Terraform public registry",
      "from a variable likely declared in a .tfvars file being passed to another module"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following best describes a Terraform provider?",
    "options": [
      "describes an infrastructure object, such as a virtual network, compute instance, or other components",
      "a plugin that Terraform uses to translate the API interactions with the service or provider",
      "a container for multiple resources that are used together",
      "serves as a parameter for a Terraform module that allows a module to be customized"
    ],
    "answer": 1
  },
  {
    "question": "True or False? A <code class='inline'>main.tf</code> file is always required when using Terraform?",
    "options": [
      "False",
      "True"
    ],
    "answer": 0
  },
  {
    "question": "Scenario: You are deploying a new application and want to deploy it to multiple AWS regions within the same configuration file. Which of the following features will allow you to configure this?",
    "options": [
      "a provider with multiple versions defined",
      "multiple provider blocks using an alias",
      "using the default provider along with a single defined provider",
      "one provider block that defines multiple regions"
    ],
    "answer": 1
  },
  {
    "question": "Jeff is a DevOps Engineer for a large company and is currently managing the infrastructure for many different applications using Terraform. Recently, Jeff received a request to remove a specific VMware virtual machine from Terraform as the application team no longer needs it. Jeff opens his terminal and issues the command:<pre><code>$&nbsp;terraform state rm vsphere_virtual_machine.app1\n \nRemoved vsphere_virtual_machine.app1\nSuccessfully removed 1 resource instance(s).</code></pre>The next time that Jeff runs a <code class='inline'>terraform apply</code>, the resource is not marked to be deleted. In fact, Terraform is stating that it is creating another identical resource.<pre><code>.....\nAn execution plan has been generated and is shown below.  \nResource actions are indicated with the following symbols:\n  + create\n \nTerraform will perform the following actions:\n \n  # vsphere_virtual_machine.app1 will be created</code></pre>What would explain this behavior?",
    "options": [
      "the resource was manually deleted within the VMware infrastructure and needs to be recreated ",
      "the state file was not saved before the <code class='inline'>terraform apply</code> was executed, therefore Terraform sees that the resource is still in the state file",
      "Jeff removed the resource from the state file, and not the configuration file. Therefore, Terraform is no longer aware of the virtual machine and assumes Jeff wants to create a new one since the virtual machine is still in the Terraform configuration file",
      "after running the terraform rm command, Jeff needs to run a Terraform plan first to tell Terraform of the updated configuration. A plan will instruct Terraform that the resource should be deleted upon the next <code class='inline'>terraform apply</code>"
    ],
    "answer": 2
  },
  {
    "question": "True or False? Terraform is designed to work only with public cloud platforms, and organizations that wish to use it for on-premises infrastructure (private cloud) should look for an alternative solution.",
    "options": [
      "False",
      "True"
    ],
    "answer": 0
  },
  {
    "question": "Michael has deployed many resources in AWS using Terraform and can easily update or destroy resources when required by the application team. A new employee, Dwight, is working with the application team and deployed a new EC2 instance through the AWS console. When Michael finds out, he decided he wants to manage the new EC2 instance using Terraform moving forward. He opens his terminal and types:<pre><code>$ terraform import aws_instance.web_app_42 i-b54a26b28b8acv7233</code></pre>However, Terraform returns the following error: <code class='inline'>Error: resource address \"aws_instance.web_app_42\" does not exist in the configuration.</code> \n\nWhat does Michael need to do first in order to manage the new Amazon EC2 instance with Terraform?",
    "options": [
      "Terraform cannot manage resources that were provisioned manually ",
      "configure the appropriate tags on the Amazon EC2 resource so Terraform knows that it should manage the resource moving forward",
      "create a configuration for the new resource in the Terraform configuration file, such as:<pre><code>resource \"aws_instance\" \"web_app_42\" {\n  # (resource arguments)\n}</code></pre>",
      "import the configuration of the EC2 instance called <code class='inline'>web_app_42</code> from AWS first"
    ],
    "answer": 2
  },
  {
    "question": "What happens when you apply a Terraform configuration using <code class='inline'>terraform apply</code>? (select two)",
    "options": [
      "Terraform formats your configuration to the standard canonical format and style",
      "Terraform downloads any required plugins",
      "Terraform recreates all the infrastructure defined in the configuration file",
      "Terraform makes infrastructure changes defined in your configuration.",
      "Terraform updates the state file with configuration changes made during the execution"
    ],
    "answers": [3, 4]
  },
  {
    "question": "Margaret is calling a child module to deploy infrastructure for her organization. Just as a good architect does (and suggested by HashiCorp), she specifies the module version she wants to use even though there are newer versions available. During a <code class='inline'>terrafom init</code>, Terraform downloads v0.0.5 just as expected. \n\nWhat would happen if Margaret removed the version parameter in the module block and ran a <code class='inline'>terraform init</code> again?<pre><code>module \"consul\" {\n  source  = \"hashicorp/consul/aws\"\n  version = \"0.0.5\"\n \n  servers = 3\n}</code></pre>",
    "options": [
      "Terraform would return an error, as the <code class='inline'>version</code> parameter is required",
      "Terraform would use the existing module already downloaded",
      "Terraform would download the latest version of the module",
      "Terraform would skip the module"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following best describes a \"data source\"?",
    "options": [
      "a file that contains the current working version of Terraform ",
      "maintains a list of strings to store the values of declared outputs in Terraform",
      "provides required data for declared variables used within the Terraform configuration",
      "enables Terraform to fetch data for use elsewhere in the Terraform configuration"
    ],
    "answer": 3
  },
  {
    "question": "Using the Terraform code below, where will the resource be provisioned?<pre><code>provider \"aws\" {\n  region = \"us-east-1\"\n}\n \nprovider \"aws\" {\n  alias  = \"west\"\n  region = \"us-west-2\"\n}\n \nprovider \"aws\" {\n  alias  = \"eu\"\n  region = \"eu-west-2\"\n}\n \nresource \"aws_instance\" \"vault\" {\n  ami                    = data.aws_ami.amzlinux2.id\n  instance_type          = \"t3.micro\"\n  key_name               = \"krausen_key\"\n  vpc_security_group_ids = var.vault_sg\n  subnet_id              = var.vault_subnet\n  user_data              = file(\"vault.sh\")\n \n  tags = {\n    Name = \"vault\"\n  }\n}</code></pre>",
    "options": [
      "us-west-1",
      "us-east-1",
      "us-west-2"
    ],
    "answer": 1
  },
  {
    "question": "A provider alias is used for what purpose in a Terraform configuration file?",
    "options": [
      "using the same provider with different configurations for different resources",
      "alias isn't used with providers, they are used with provisioners",
      "to use as shorthand for resources to be deployed with the referenced provider",
      "to signify what resources should be deployed to a certain cloud provider"
    ],
    "answer": 0
  },
  {
    "question": "When a <code class='inline'>terraform apply</code> is executed, where is the AWS provider retrieving credentials to create cloud resources in the code snippet below?<pre><code>provider \"aws\" {\n   region     = us-east-1\n   access_key = data.vault_aws_access_credentials.creds.access_key\n   secret_key = data.vault_aws_access_credentials.creds.secret_key\n}</code></pre>",
    "options": [
      "from the <code class='inline'>.tfvars</code> file called <code class='inline'>vault</code> ",
      "from a variable called <code class='inline'>vault_aws_access_credentials</code> ",
      "from a script that is executing commands against Vault",
      "from a <code class='inline'>data source</code> that is retrieving credentials from HashiCorp Vault. Vault is dynamically generating the credentials on Terraform's behalf."
    ],
    "answer": 3
  },
  {
    "question": "Pam just finished up a new Terraform configuration file and has successfully deployed the configuration on Azure using Terraform Community. After confirming the configuration on Azure, Pam changes to a new workspace and then heads to lunch. When she arrives back at her desk, Pam decides to destroy the resources to save on cost. When Pam executes a <code class='inline'>terraform destroy</code>, the output indicates there are no resources to delete.\n\nWhy can't Pam delete the newly created resources in Azure?<pre><code>$&nbsp;terraform destroy\n \nAn execution plan has been generated and is shown below.  \nResource actions are indicated with the following symbols:\n \nTerraform will perform the following actions:\n \nPlan: 0 to add, 0 to change, 0 to destroy.</code></pre>",
    "options": [
      "Terraform reached the maximum timeout while Pam was away from lunch, therefore the resources were automatically destroyed",
      "there is no Terraform state in the current workspace she is working in",
      "the Terraform state was deleted when she created the new workspace",
      "an Azure administrator manually deleted the resources"
    ],
    "answer": 1
  },
  {
    "question": "There are multiple ways to provide sensitive values when using Terraform. However, sensitive information provided in your configuration can be written to the state file, which is not desirable. Which method below will not result in sensitive information being written to the state file?",
    "options": [
      "retrieving the credentials from a data source, such as HashiCorp Vault",
      "using a tfvars file",
      "using a declared variable ",
      "none of the above"
    ],
    "answer": 3
  },
  {
    "question": "Terraform Cloud provides organizations with many features not available to those running Terraform Community to deploy infrastructure. Select the ADDITIONAL features that organizations can take advantage of by moving to Terraform Cloud. (select three)",
    "options": [
      "Terraform registry",
      "providers",
      "private registry",
      "VCS connection",
      "remote runs"
    ],
    "answers": [2, 3, 4]
  },
  {
    "question": "Which feature of Terraform Cloud can be used to enforce fine-grained policies to enforce standardization and cost controls before resources are provisioned with Terraform?",
    "options": [
      "remote runs",
      "sentinel and OPA",
      "private registry",
      "workspaces"
    ],
    "answer": 1
  },
  {
    "question": "You have deployed your production environment with Terraform, and a developer has requested that you update a load balancer configuration to improve its compatibility with their application. Once you have modified your Terraform configuration, how can you conduct a dry run to verify that no unexpected changes will be made?",
    "options": [
      "run  <code class='inline'>terraform state list</code> to view the existing resources and ensure they won't conflict with the new changes",
      "run  <code class='inline'>terraform plan</code> and inspect the proposed changes ",
      "run <code class='inline'>terraform plan -auto-approve</code> to push the changes",
      "run <code class='inline'>terraform console</code> and validate the result of any expressions "
    ],
    "answer": 1
  },
  {
    "question": "Your organization requires that no security group in your public cloud environment includes \"0.0.0.0/0\" as a source of network traffic. How can you proactively enforce this control and prevent Terraform configurations from being executed if they contain this specific string?",
    "options": [
      "Configure a rule in your public cloud provider to scan for security groups and alert you if a security group contains the string",
      "Configure the user's TFC organization permissions to not allow any variables or Terraform configuration that contain this string",
      "Create a Sentinel or OPA policy that checks for the string and denies the Terraform apply if the string exists",
      "Perform a <code class='inline'>terraform validate</code> on the local workstation before committing the code to the code repository linked to TFC workspace"
    ],
    "answer": 2
  },
  {
    "question": "What happens if multiple users attempt to run a <code class='inline'>terraform apply</code> simultaneously when using a remote backend? (select two)",
    "options": [
      "the Terraform apply will work for both users",
      "if the backend does not support locking, the state file could become corrupted",
      "both users will get an error",
      "if the backend supports locking, the first <em>terraform apply</em> will lock the file for changes, preventing the second user from running the <em>apply</em>"
    ],
    "answers": [1, 3]
  },
  {
    "question": "Which block type is used to assign a name to an expression that can be used multiple times within a module without having to repeat it?",
    "options": [
      "<code class='inline'>provider {}</code> ",
      "<code class='inline'>locals {}</code> ",
      "<code class='inline'>resource {}</code> ",
      "<code class='inline'>terraform {}</code>"
    ],
    "answer": 1
  },
  {
    "question": "What is the primary function of Terraform Cloud agents?",
    "options": [
      "provide remote access to Terraform workspaces",
      "monitor and troubleshoot Terraform deployments",
      "store and manage Terraform state files",
      "execute Terraform plans and apply changes to infrastructure"
    ],
    "answer": 3
  },
  {
    "question": "Both Terraform Community/CLI and Terraform Cloud offer a feature called \"workspaces\". Which of the following statements are true regarding workspaces? (select three)",
    "options": [
      "CLI workspaces are alternative state files in the same working directory",
      "Each CLI workspace coincides with a different VCS repo",
      "Terraform Cloud manages infrastructure collections with a workspace whereas CLI manages collections of infrastructure resources with a persistent working directory",
      "Run history is logged in a file underneath the working directory of a CLI workspace",
      "Terraform Cloud maintains the state version and run history for each workspace"
    ],
    "answers": [0, 2, 4]
  },
  {
    "question": "Philip works at a payment processing company and manages the organization's VMware environment. He recently provisioned a new cluster for a production environment. To ensure everything is working as expected, Philip has been using Terraform and the VMware vSphere client to create and destroy new virtual machines. Currently, there are three virtual machines running on the new cluster, so Philip runs <code class='inline'>terraform destroy</code> to remove the remaining virtual machines from the cluster. However, Terraform only removes two of the virtual machines, leaving one virtual machine still running. \n\nWhy would Terraform only remove two of the three virtual machines?",
    "options": [
      "the virtual machine was marked with vSphere tags to prevent it from being destroyed",
      "the vSphere provider credentials are invalid, and therefore Terraform cannot reach the third virtual machine",
      "the remaining virtual machine was not created by Terraform, therefore Terraform is not aware of the virtual machine and cannot destroy it",
      "Terraform can only destroy a maximum of 2 resources per <code class='inline'>terraform destroy</code> execution"
    ],
    "answer": 2
  },
  {
    "question": "Given the following snippet of code, what does <code class='inline'>servers = 4</code> reference?<pre><code>module \"servers\" {\n  source = \"./modules/aws-servers\"\n \n  servers = 4\n}</code></pre>",
    "options": [
      "<code class='inline'>servers</code> is not a valid configuration for a module",
      "the number of times the module will be executed",
      "the output variable of the module",
      "the value of an input variable"
    ],
    "answer": 3
  },
  {
    "question": "Fill in the correct answers below:\n\nInfrastructure as Code (IaC) makes infrastructure changes _______, ________, ________, and __________. (select four)",
    "options": [
      "highly-available",
      "idempotent",
      "repeatable",
      "consistent",
      "predictable"
    ],
    "answers": [1, 2, 3, 4]
  },
  {
    "question": "True or False? A remote backend configuration is required for using Terraform.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1
  },
  {
    "question": "You have created a new workspace for a project and added all of your Terraform configuration files in the new directory. Before you execute a <code class='inline'>terraform plan</code>, you want to validate the configuration using the <code class='inline'>terraform validate</code> command. However, Terraform returns the error:<pre><code>$ terraform validate\nError: Could not load plugin</code></pre>What would cause this error when trying to validate the configuration?",
    "options": [
      "the credentials for the provider are invalid",
      "the configuration is invalid",
      "the directory does not contain valid Terraform configuration files",
      "the directory was not initialized "
    ],
    "answer": 3
  },
  {
    "question": "When running the <code class='inline'>terraform validate</code> command, which issue will be brought to your attention?",
    "options": [
      "there is configuration drift within the managed infrastructure",
      "parameters inside of a resource block are not lined up with spaces",
      "a variable is being used in a resource block but has not been declared",
      "there is no existing state file for the configuration"
    ],
    "answer": 2
  },
  {
    "question": "Given the following snippet of code, what will the value of the \"Name\" tag equal after a <code class='inline'>terraform apply</code>?<pre><code>variable \"name\" {\n  description = \"The username assigned to the infrastructure\"\n  default = \"data_processing\"\n}\n \nvariable \"team\" {\n  description = \"The team responsible for the infrastructure\"\n  default = \"IS Team\"\n}\n \nlocals {\n  name  = (var.name != \"\" ? var.name : random_id.id.hex)\n  owner = var.team\n  common_tags = {\n    Owner = local.owner\n    Name  = local.name\n  }\n}</code></pre>",
    "options": [
      "data_processing",
      "an empty string",
      "IS Team",
      "a random hex value"
    ],
    "answer": 0
  },
  {
    "question": "Based on the Terraform code below, what block type is used to define the VPC?<pre><code>vpc_id = aws_vpc.main.id\n...</code></pre>",
    "options": [
      "<code class='inline'>provider</code> block",
      "<code class='inline'>resource</code> block",
      "<code class='inline'>data</code> block",
      "<code class='inline'>locals</code> block"
    ],
    "answer": 1
  },
  {
    "question": "There are an endless number of benefits to using Terraform within your organization. Which of the following are true statements regarding Terraform? (select three)",
    "options": [
      "Terraform is cloud-agnostic but requires a specific provider for the cloud platform",
      "Terraform can simplify both management and orchestration of deploying large-scale, multi-cloud infrastructure",
      "Terraform can manage dependencies within a single cloud, but not cross-cloud",
      "A single Terraform configuration file can be used to manage multiple providers"
    ],
    "answers": [0, 1, 3]
  },
  {
    "question": "Rigby is implementing Terraform and was given a configuration that includes the snippet below. Where is this particular module stored?<pre><code>module \"consul\" {\n  source  = \"hashicorp/consul/aws\"\n  version = \"0.1.0\"\n}</code></pre>",
    "options": [
      "a private registry supported by your organization",
      "public Terraform registry",
      "locally but a directory back from the current directory",
      "locally in the <code class='inline'>hashicorp/consul/aws</code> directory "
    ],
    "answer": 1
  },
  {
    "question": "You have a Terraform configuration file with no defined resources. However, there is a related state file for resources that were created on AWS. What happens when you run a <em>terraform apply</em>?",
    "options": [
      "Terraform will produce an error since there are no resources defined",
      "Terraform will not perform any operations.",
      "Terraform will destroy all of the resources",
      "Terraform will scan the AWS infrastructure and create a new configuration file based on the state file."
    ],
    "answer": 2
  },
  {
    "question": "Based on the code provided, how many subnets will be created in the AWS account?\n\nvariables.tf\n<pre><code>variable \"private_subnet_names\" {\n  type    = list(string)\n  default = [\"private_subnet_a\", \"private_subnet_b\", \"private_subnet_c\"]\n}\nvariable \"vpc_cidr\" {\n  type    = string\n  default = \"10.0.0.0/16\"\n}\nvariable \"public_subnet_names\" {\n  type    = list(string)\n  default = [\"public_subnet_1\", \"public_subnet_2\"]\n}</code></pre>\n\nmain.tf\n<pre><code>resource \"aws_subnet\" \"private_subnet\" {\n  count             = length(var.private_subnet_names)\n  vpc_id            = aws_vpc.vpc.id\n  cidr_block        = cidrsubnet(var.vpc_cidr, 8, count.index)\n  availability_zone = data.aws_availability_zones.available.names[count.index]\n \n  tags = {\n    Name      = var.private_subnet_names[count.index]\n    Terraform = \"true\"\n  }\n}</code></pre>",
    "options": [
      "1",
      "3",
      "0",
      "2"
    ],
    "answer": 1
  },
  {
    "question": "What function does the <code class='inline'>terraform init -upgrade</code> command perform?",
    "options": [
      "upgrades the backend to the latest supported version",
      "upgrades all of the referenced modules and providers to the latest version of Terraform",
      "update all previously installed plugins and modules to the newest version that complies with the configurationâ€™s version constraints",
      "upgrades the Terraform configuration file(s) to use the referenced Terraform version"
    ],
    "answer": 2
  },
  {
    "question": "Variables and their default values are typically declared in a <code class='inline'>main.tf</code> or <code class='inline'>variables.tf</code> file. What type of file can be used to set explicit values for the current working directory that will override the default variable values?",
    "options": [
      ".sh file",
      ".tfstate file",
      ".tfvars file",
      ".txt file"
    ],
    "answer": 2
  },
  {
    "question": "Which of the following are the benefits of using <em>modules</em> in Terraform? (select three)",
    "options": [
      "allows modules to be stored anywhere accessible by Terraform",
      "enables code reuse",
      "supports modules stored locally or remotely",
      "supports versioning to maintain compatibility"
    ],
    "answers": [1, 2, 3]
  },
  {
    "question": "Larissa is an experienced IT professional and is working to learn Terraform to manage the F5 load balancers that front-end customer-facing applications. Larissa writes great code, but her formatting seldom meets the Terraform canonical formatting and style recommended by HashiCorp. What built-in tool or command can Larissa use to easily format her code to meet the recommendations for formatting Terraform code?",
    "options": [
      "<code class='inline'>terraform validate</code> ",
      "<code class='inline'>terraform env</code> ",
      "<code class='inline'>terraform plan</code> ",
      "<code class='inline'>terraform fmt</code> "
    ],
    "answer": 3
  },
  {
    "question": "Which of the following is not a benefit of Terraform state?",
    "options": [
      "increases performance by reducing the requirement to query multiple resources at once",
      "reduces the amount of outbound traffic by requiring that state is stored locally",
      "determines the dependency order for deployed resources",
      "provides a one-to-one mapping of the configuration to real-world resources"
    ],
    "answer": 1
  },
  {
    "question": "When using Terraform Cloud, what is the easiest way to ensure the security and integrity of modules when used by multiple teams across different projects?",
    "options": [
      "use only modules that are published to the Terraform public registry",
      "apply TFC organization permissions to all workspaces that allow them to only use certain modules",
      "Create a list of approved modules and send them to your team to ensure they don't use modules that aren't approved by the team",
      "Use the TFC Private Registry to ensure only approved modules are consumed by your organization"
    ],
    "answer": 3
  },
  {
    "question": "AutoPlants, Inc is a new startup that uses AI and robotics to grow sustainable and organic vegetables for California farmer's markets. The organization can quickly burst into the public cloud during the busy season using Terraform to provision additional resources to process AI computations and images. Since its compute stack is proprietary and critical to the organization, it needs a solution to create and publish Terraform modules that only its engineers and architects can use. \n\nWhich feature can provide this functionality?",
    "options": [
      "HashiCorp Sentinel",
      "Terraform Registry",
      "Terraform Cloud Workspaces",
      "Private Registry"
    ],
    "answer": 3
  },
  {
    "question": "Which of the following Terraform CLI commands are valid? (select five)",
    "options": [
      "<code class='inline'>terraform login</code> ",
      "<code class='inline'>terraform delete</code> ",
      "<code class='inline'>terraform fmt</code> ",
      "<code class='inline'>terraform show</code> ",
      "<code class='inline'>terraform workspace select</code> ",
      "<code class='inline'>terraform apply -refresh-only</code> ",
      "<code class='inline'>terraform initialize</code> "
    ],
    "answers": [0, 2, 3, 4, 5]
  },
  {
    "question": "Which of the following commands can be used to detect configuration drift?",
    "options": [
      "<code class='inline'>terraform get</code>",
      "<code class='inline'>terraform init</code> ",
      "<code class='inline'>terraform fmt</code> ",
      "<code class='inline'>terraform apply -refresh-only</code>"
    ],
    "answer": 3
  },
  {
    "question": "True or False? A <code class='inline'>terraform plan</code> is a required step before running a <code class='inline'>terraform apply</code>?",
    "options": [
      "False",
      "True"
    ],
    "answer": 0
  },
  {
    "question": "True or False? Any sensitive values referenced in the Terraform code, even as variables, will end up in plain text in the state file.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1
  },
  {
    "question": "Based on the following code, which code block will create a resource first?<pre><code>resource \"aws_instance\" \"data_processing\" {\n  ami           = data.aws_ami.amazon_linux.id\n  instance_type = \"t2.micro\"\n \n  depends_on = [aws_s3_bucket.customer_data]\n}\n \nmodule \"example_sqs_queue\" {\n  source  = \"terraform-aws-modules/sqs/aws\"\n  version = \"2.1.0\"\n \n  depends_on = [aws_s3_bucket.customer_data, aws_instance.data_processing]\n}\n \nresource \"aws_s3_bucket\" \"customer_data\" {\n  acl = \"private\"\n}\n \nresource \"aws_eip\" \"ip\" {\n  vpc      = true\n  instance = aws_instance.data_processing.id\n}</code></pre>",
    "options": [
      "<code class='inline'>aws_eip.ip</code> ",
      "<code class='inline'>aws_instance.data_processing</code> ",
      "<code class='inline'>example_sqs_queue</code> ",
      "<code class='inline'>aws_s3_bucket.customer_data</code> "
    ],
    "answer": 3
  },
  {
    "question": "Aaron is new to Terraform and has a single configuration file ready for deployment. What can be true about this configuration file? (select three)",
    "options": [
      "the state file can be stored in Azure but provision applications in AWS",
      "the state can be disabled when deploying to multiple clouds to prevent sensitive data from being shared across cloud platforms",
      "Aaron's configuration file can deploy applications in both AWS and GCP",
      "the configuration file can deploy both QA and Staging infrastructure for applications"
    ],
    "answers": [0, 2, 3]
  },
  {
    "question": "You are working with a cloud provider to deploy resources using Terraform. You've added the following <code class='inline'>data</code> block to your configuration. When the <code class='inline'>data</code> block is used, what data will be returned?<pre><code>data \"aws_ami\" \"amzlinux2\" {\n  most_recent = true\n  owners      = [\"amazon\"]\n \n  filter {\n    name   = \"name\"\n    values = [\"amzn2-ami-hvm-*-x86_64-ebs\"]\n  }\n}</code></pre><pre><code>resource \"aws_instance\" \"vault\" {\n  ami                         = data.aws_ami.amzlinux2.id\n  instance_type               = \"t3.micro\"\n  key_name                    = \"vault-key\"\n  vpc_security_group_ids      = var.sg\n  subnet_id                   = var.subnet\n  associate_public_ip_address = \"true\"\n  user_data                   = file(\"vault.sh\")\n \n  tags = {\n    Name = \"vault\"\n  }\n}</code></pre>",
    "options": [
      "a custom AMI for Amazon Linux 2",
      "the latest AMI you have previously used for an Amazon Linux 2 image",
      "the IP address of an EC2 instance running in AWS",
      "all possible data of a specific Amazon Machine Image(AMI) from AWS"
    ],
    "answer": 3
  },
  {
    "question": "You are an Infrastructure Engineer at Strategies, Inc, which is a new organization that provides marketing services to startups. All of your infrastructure is provisioned and managed by Terraform. Despite your requests to not make changes outside of Terraform, sometimes the other engineers log into the cloud platform and make minor changes to resolve problems. \n\nWhat Terraform command can you use to reconcile the state with the real-world infrastructure in order to detect any drift from the last-known state?",
    "options": [
      "<code class='inline'>terraform apply -refresh-only</code> ",
      "<code class='inline'>terraform validate</code> ",
      "<code class='inline'>terraform state show</code> ",
      "<code class='inline'>terraform graph</code> "
    ],
    "answer": 0
  },
  {
    "question": "Teddy is using Terraform to deploy infrastructure using modules. Where is the module below stored?<pre><code>module \"monitoring_tools\" {\n  source = \"./modules/monitoring_tools\"\n \n  cluster_hostname = module.k8s_cluster.hostname\n}</code></pre>",
    "options": [
      "on the Terraform public registry",
      "locally on the instance running Terraform",
      "in a public GitLab repository",
      "a private registry in Terraform Cloud (free)"
    ],
    "answer": 1
  },
  {
    "question": "You have a Terraform configuration file defining resources to deploy on VMware, yet there is no related state file. You have successfully run <code class='inline'>terraform init</code> already. What happens when you run a <em>terraform apply</em>?",
    "options": [
      "Terraform will scan the VMware infrastructure, create a new state file, and deploy the new resources as defined in the configuration file. ",
      "All existing infrastructure on VMware will be deleted, and the resources defined in the configuration file will be created.",
      "Since there is no state file associated with this configuration file, the defined resources will be not created on the VMware infrastructure.",
      "Terraform will produce an error since there is no state file"
    ],
    "answer": 0
  },
  {
    "question": "Given a Terraform config that includes the following code, how would you reference the last instance that will be created?<pre><code>resource \"aws_instance\" \"database\" {\n  # ...\n  for_each = {\n    \"vault\": \"secrets\",\n    \"terraform\": \"infrastructure\",\n    \"consul\": \"networking\",\n    \"nomad\": \"scheduler\"\n  }\n}</code></pre>",
    "options": [
      "aws_instance.database[\"nomad\"]",
      "aws_instance.nomad",
      "aws_instance.database[2]",
      "aws_instance.database[4]"
    ],
    "answer": 0
  },
  {
    "question": "Infrastructure as Code (IaC) provides many benefits to help organizations deploy application infrastructure much faster than clicking around in the console. What are the additional benefits of IaC? (select three)",
    "options": [
      "eliminates parallelism ",
      "code can easily be shared and reused",
      "allows infrastructure to be versioned",
      "creates a blueprint of your data center",
      "can always be used to deploy the latest features and services"
    ],
    "answers": [1, 2, 3]
  },
  {
    "question": "Ralphie has executed a <code class='inline'>terraform apply</code> using a complex Terraform configuration file. However, a few resources failed to deploy due to incorrect variables. After the error is discovered, what happens to the resources that were successfully provisioned?",
    "options": [
      "Terraform deletes the resources on the next run",
      "Terraform rolls back the configuration due to the error, therefore the resources are automatically destroyed",
      "the resources that were successfully provisioned will remain as deployed",
      "resources successfully deployed are marked for replacement"
    ],
    "answer": 2
  },
  {
    "question": "When running a <code class='inline'>terraform plan</code>, how can you save the plan so it can be applied at a later time?",
    "options": [
      "you cannot save a plan",
      "use the <code class='inline'>-file</code> flag",
      "use the <code class='inline'>-save</code> flag",
      "use the <code class='inline'>-out</code> flag"
    ],
    "answer": 3
  },
  {
    "question": "What feature of Terraform provides an abstraction above the upstream API and is responsible for understanding API interactions and exposing resources?",
    "options": [
      "Terraform configuration file",
      "Terraform provisioner",
      "Terraform provider",
      "Terraform backend"
    ],
    "answer": 2
  },
  {
    "question": "Terraform has detailed logs that can be enabled using the <code class='inline'>TF_LOG</code> environment variable. Which of the following log levels is the most verbose, meaning it will log the most specific logs?",
    "options": [
      "<code class='inline'>INFO</code> ",
      "<code class='inline'>DEBUG</code> ",
      "<code class='inline'>TRACE</code> ",
      "<code class='inline'>ERROR</code> "
    ],
    "answer": 2
  },
  {
    "question": "When using a Terraform provider, it's common that Terraform needs credentials to access the API for the underlying platform, such as VMware, AWS, or Google Cloud. While there are many ways to accomplish this, what are three options that you can provide these credentials? (select three)",
    "options": [
      "use environment variables",
      "using the <code class='inline'>resources</code> block in your configuration",
      "integrated services, such as AWS IAM or Azure Managed Service Identity",
      "directly in the provider block by hardcoding or using a variable"
    ],
    "answers": [0, 2, 3]
  },
  {
    "question": "Which of the following tasks does <code class='inline'>terraform init</code> perform? (select three)",
    "options": [
      "creates a sample Terraform configuration file in the working directory",
      "caches the source code locally for referenced modules",
      "downloads required providers used in your configuration file",
      "prepares the working directory for use with Terraform",
      "updates your state file based on any new changes"
    ],
    "answers": [
      1,
      2,
      3
    ]
  },
  {
    "question": "Which common action does not cause Terraform to refresh its state?",
    "options": [
      "<code class='inline'>terraform apply</code> ",
      "<code class='inline'>terraform destroy</code> ",
      "<code class='inline'>terraform state list</code>",
      "<code class='inline'>terraform plan</code> "
    ],
    "answer": 2
  },
  {
    "question": "Given the code snippet below, how would you refer to the value of <code class='inline'>ip</code>  of an environment when using a <code class='inline'>for_each</code> argument in a resource block?<pre><code>variable \"env\" {\n  type = map(any)\n  default = {\n    prod = {\n      ip = \"10.0.150.0/24\"\n      az = \"us-east-1a\"\n    }\n    dev  = {\n      ip = \"10.0.250.0/24\"\n      az = \"us-east-1e\"\n    }\n  }\n}</code></pre>",
    "options": [
      "<code class='inline'>var.env.dev.ip</code> ",
      "<code class='inline'>each.value.ip</code> ",
      "<code class='inline'>var.env[\"dev.ip\"]</code> ",
      "<code class='inline'>each.dev.ip</code> "
    ],
    "answer": 1
  },
  {
    "question": "You have declared a variable named <strong><em>db_connection_string</em></strong> inside of the <strong><em>app</em></strong> module. However, when you run a <code class='inline'>terraform apply</code>, you get the following error message:<pre><code>Error: Reference to undeclared input variable\n \non main.tf line 35:\n4: db_path = var.db_connection_string\n \nAn input variable with the name \"db_connection_string\" has not been declared. This variable can be declared with a variable \"db_connection_string\" {} block.</code></pre>Why would you receive such an error?",
    "options": [
      "input variables are not referenced using the <code class='inline'>var</code> prefix",
      "since the variable was declared within the module, it cannot be referenced outside of the module",
      "an output block was not created in the module, and therefore the variable cannot be referenced",
      "the variable should be referenced as <code class='inline'>var.module.app.db_connection_string</code> "
    ],
    "answer": 1
  },
  {
    "question": "Which of the following best describes the primary use of Infrastructure as Code (IaC)?",
    "options": [
      "the ability to programmatically deploy and configure resources",
      "ensuring that applications remain in the desired state configuration",
      "combining disparate technologies and various tasks into a single workflow",
      "ensures that the operations team understands how to develop code"
    ],
    "answer": 0
  },
  {
    "question": "Which of the following are true regarding Terraform variables? (select two)",
    "options": [
      "the description of a variable will be written to state to help describe the contents of the state file",
      "the variable name can be found in the state file to allow for easy searching",
      "the default value will be found in the state file if no other value was set for the variable",
      "variables marked as sensitive are still stored in the state file, even though the values are obfuscated from the CLI output"
    ],
    "answers": [
      2,
      3
    ]
  },
  {
    "question": "Which of the following is the best description of a <code class='inline'>dynamic</code> block?",
    "options": [
      "declares a resource of a given type with a given local name",
      "exports a value exported by a module or configuration ",
      "produces nested configuration blocks instead of a complex typed value",
      "requests that Terraform read from a given data source and export the result under the given local name"
    ],
    "answer": 2
  },
  {
    "question": "A new variable has been created using the <code class='inline'>list</code> type as shown below. How would you reference <code class='inline'>terraform</code> in your configuration?<pre><code>variable \"products\" {\n    type = list(string)\n    default = [\n        \"vault\",\n        \"consul\",\n        \"terraform\",\n        \"boundary\",\n        \"nomad\"\n    ]\n}</code></pre>",
    "options": [
      "<code class='inline'>var.products[2]</code> ",
      "<code class='inline'>var.default.products[\"terraform\"]</code> ",
      "<code class='inline'>var.products[3]</code> ",
      "<code class='inline'>var.list.products[2]</code> "
    ],
    "answer": 0
  },
  {
    "question": "You are working on updating your infrastructure managed by Terraform. Before lunch, you update your configuration file and run a <code class='inline'>terraform plan</code> to validate the changes. While you are away, a colleague manually updates a tag on a managed resource directly in the console (UI).\n\nWhat will happen when you run a <code class='inline'>terraform apply</code>?",
    "options": [
      "Before applying the new configuration, Terraform will refresh the state and recognize the manual change. It will update the resource based on the desired state as configured in the Terraform configuration. The manual change will no longer exist.",
      "Terraform will update the manually changed resource back to the original configuration. It will then apply the new changes defined in the updated configuration file.",
      "Terraform will recognize the manual change and return an error since the Terraform state no longer matches the real-world infrastructure.",
      "Terraform will destroy the manually-changed resource and recreate it to ensure the infrastructure matches the desired state."
    ],
    "answer": 0
  },
  {
    "question": "True or False? If you have properly locked down access to your state file, it is safe to provide sensitive values inside of your Terraform configuration.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following are advantages of using infrastructure as code (IaC) for your day-to-day operations? (select three)",
    "options": [
      "API-driven workflows",
      "provides the ability to version control the infrastructure and application architecture",
      "enables self-service for developers and operators alike",
      "ensures the security of applications provisioned on managed infrastructure"
    ],
    "answers": [
      0,
      1,
      2
    ]
  },
  {
    "question": "After running <code class='inline'>terraform apply</code>, you notice some odd behavior and need to investigate. Which of the following environment variables will configure Terraform to write more detailed logs to assist with troubleshooting?",
    "options": [
      "<code class='inline'>TF_LOG=TRACE</code> ",
      "<code class='inline'>TF_LOG_CONFIG=WARN</code> ",
      "<code class='inline'>TF_LOGS=ERROR</code> ",
      "<code class='inline'>LOG_CONFIG=INFO</code> "
    ],
    "answer": 0
  },
  {
    "question": "You are using Terraform to manage resources in Azure. Due to unique requirements, you need to specify the version of the Azure provider so it remains the same until newer versions are thoroughly tested. \n\nWhat block would properly configure Terraform to ensure it always installs the same Azure provider version?",
    "options": [
      "<pre><code>terraform {\n  required_providers {\n    azurerm = {\n      source = \"hashicorp/azurerm\"\n      version = \"2.90.0\"\n    }\n  }\n}</code></pre>",
      "<pre><code>data \"azurerm\" {\n  source = \"hashicorp/azurerm\"\n  version = 2.90.0\n}</code></pre>",
      "<pre><code>required_providers {\n  azurerm = {\n    source = \"hashicorp/azurerm\"\n    version = \"2.90.0\"\n  }\n}</code></pre>",
      "<pre><code>provider \"azurerm\" {\n  source = \"hashicorp/azurerm\"\n  version = \"2.90.0\"\n}</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "True or False? In most cases, you can move Terraform state between supported backends at any time, even after running your first <code class='inline'>terraform apply</code>.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "question": "When initializing Terraform, you notice that Terraform's CLI output states it is downloading the modules referenced in your code. Where does Terraform download and cache these modules?",
    "options": [
      "in the <code class='inline'>/tmp</code> directory on the machine executing Terraform",
      "in the <code class='inline'>/downloads</code> directory for the user running the terraform init",
      "in a <code class='inline'>/modules</code> directory in the current working directory",
      "in the <code class='inline'>.terraform/modules</code> subdirectory in the current working directory"
    ],
    "answer": 3
  },
  {
    "question": "Your organization uses IaC to provision and manage resources in a public cloud platform. A new employee has developed changes to existing code and wants to push it into production. \n\nWhat best practice should the new employee follow to submit the new code?",
    "options": [
      "Submit a merge/pull request of the proposed changes. Have a team member validate the changes and approve the request.",
      "Make the change directly using the cloud provider's API to ensure the changes are valid. Store the code locally and email a copy of the code to a teammate so they have an extra copy.",
      "Execute the code locally on the developer's machine to make the changes directly to the infrastructure.",
      "Submit the change to the change control board and wait for the approval. Commit the code directly to the main repository. "
    ],
    "answer": 0
  },
  {
    "question": "You are using Terraform to manage resources in Azure. Due to unique requirements, you need to specify the version of the Azure provider so it remains the same until newer versions are thoroughly tested. \n\nWhat block would properly configure Terraform to ensure it always installs the same Azure provider version?",
    "options": [
      "<pre><code>terraform {\n  required_providers {\n    azurerm = {\n      source = \"hashicorp/azurerm\"\n      version = \"2.90.0\"\n    }\n  }\n}</code></pre>",
      "<pre><code>data \"azurerm\" {\n  source = \"hashicorp/azurerm\"\n  version = 2.90.0\n}</code></pre>",
      "<pre><code>required_providers {\n  azurerm = {\n    source = \"hashicorp/azurerm\"\n    version = \"2.90.0\"\n  }\n}</code></pre>",
      "<pre><code>provider \"azurerm\" {\n  source = \"hashicorp/azurerm\"\n  version = \"2.90.0\"\n}</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "True or False? In most cases, you can move Terraform state between supported backends at any time, even after running your first <code class='inline'>terraform apply</code>.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "question": "You have deployed your network architecture in AWS using Terraform. A colleague recently logged in to the AWS console and made a change manually and now you need to be sure your Terraform state reflects the new change. \n\nWhat command should you run to update your Terraform state?",
    "options": [
      "<code class='inline'>terraform init -upgrade</code> ",
      "<code class='inline'>terraform plan -out=refresh</code> ",
      "<code class='inline'>terraform get -update</code> ",
      "<code class='inline'>terraform apply -refresh-only</code> "
    ],
    "answer": 3
  },
  {
    "question": "Your co-worker has decided to migrate Terraform state to a remote backend. They configure Terraform with the backend configuration, including the type, location, and credentials. However, you want to secure this configuration better.\n\nRather than storing them in plaintext, where should you store the credentials for the remote backend? (select two)",
    "options": [
      "on the remote system",
      "credentials file",
      "use a variable",
      "environment variables"
    ],
    "answers": [
      1,
      3
    ]
  },
  {
    "question": "When using collection types for variables in Terraform, which of the following two statements are true? (select two)",
    "options": [
      "lists are defined inside of square brackets, like this: <code class='inline'>[\"value1\", \"value2\", \"value3\"]</code> ",
      "lists are defined inside of curly braces, like this: <code class='inline'>{\"value1\", \"value2\", \"value3\"}</code> ",
      "maps are defined inside of curly braces, like this: <code class='inline'>{ name = \"John\" age = 52 }</code> ",
      "maps are defined inside of square brackets, like this: <code class='inline'>[ name = \"John\" age = 52 ]</code> "
    ],
    "answers": [
      0,
      2
    ]
  },
  {
    "question": "You are using Terraform Community and need to spin up a copy of your GCP environment in a second region to test some new features. You create a new workspace. Which of the following is true about this new workspace? (select four)",
    "options": [
      "changes to this workspace won't impact other workspaces",
      "it has its own state file",
      "it uses a different Terraform backend",
      "it uses the same Terraform code in the current directory",
      "you can use a different variables file for this workspace if needed"
    ],
    "answers": [
      0,
      1,
      3,
      4
    ]
  },
  {
    "question": "What Terraform command can be used to evaluate and experiment with expressions in your configuration?",
    "options": [
      "<code class='inline'>terraform plan</code> ",
      "<code class='inline'>terraform get</code> ",
      "<code class='inline'>terraform console</code> ",
      "<code class='inline'>terraform env</code> "
    ],
    "answer": 2
  },
  {
    "question": "You are using modules to deploy various resources in your environment. You want to provide a \"friendly name\" for the DNS of a new web server so you can simply click the CLI output and access the new website. Which of the following code snippets would satisfy these requirements?",
    "options": [
      "Add the following code to the parent module:<pre><code>output \"website\" {\n  description = \"Outputs the URL of the provisioned website\" \n  value       = aws_instance.web.public_dns\n}</code></pre>",
      "Add the following code to the web module:<pre><code>output \"website\" {\n  description = \"Outputs the URL of the provisioned website\" \n  value       = \"https://${aws_instance.web.public_dns}:8080/index.html\"\n}</code></pre>",
      "Add the following code to the web module:<pre><code>output \"website\" {\n  description = \"Outputs the URL of the provisioned website\" \n  value       = module.web.public_dns\n}</code></pre>",
      "Add the following code to the parent module:<pre><code>output \"website\" {\n  description = \"Outputs the URL of the provisioned website\" \n  value       = \"https://${module.web.public_dns}:8080/index.html\"\n}</code></pre>"
    ],
    "answer": 3
  },
  {
    "question": "You need to use multiple resources from different providers in Terraform to accomplish a task. Which of the following can be used to configure the settings for each of the providers?",
    "options": [
      "<pre><code>data \"consul\" {\n  address = \"https://consul.krausen.com:8500\"  \n  namespace = \"developer\"\n  token = \"45a3bd52-07c7-47a4-52fd-0745e0cfe967\"\n}\n \ndata \"vault\" {\n  address = \"https://vault.krausen.com:8200\"\n  namespace = \"developer\"\n}</code></pre>",
      "<pre><code>terraform {\n  providers {\n    consul {\n      address = \"https://consul.krausen.com:8500\"  \n      namespace = \"developer\"\n      token = \"45a3bd52-07c7-47a4-52fd-0745e0cfe967\"\n    }\n    vault {\n      address = \"https://vault.krausen.com:8200\"\n      namespace = \"developer\"\n    }\n  }\n}</code></pre>",
      "<pre><code>provider \"consul\" {\n  address = \"https://consul.krausen.com:8500\"  \n  namespace = \"developer\"\n  token = \"45a3bd52-07c7-47a4-52fd-0745e0cfe967\"\n}\n \nprovider \"vault\" {\n  address = \"https://vault.krausen.com:8200\"\n  namespace = \"developer\"\n}</code></pre>",
      "<pre><code>required_providers {\n  consul {\n    address = \"https://consul.krausen.com:8500\"  \n    namespace = \"developer\"\n    token = \"45a3bd52-07c7-47a4-52fd-0745e0cfe967\"\n  }\n  vault {\n    address = \"https://vault.krausen.com:8200\"\n    namespace = \"developer\"\n  }\n}</code></pre>"
    ],
    "answer": 2
  },
  {
    "question": "True or False? In both Terraform Community and Terraform Cloud, workspaces provide similar functionality of using a separate state file for each workspace.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1
  },
  {
    "question": "True or False? You can continue using your local Terraform CLI to execute <code class='inline'>terraform plan</code> and <code class='inline'>terraform apply</code> operations while using Terraform Cloud as the backend.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1
  },
  {
    "question": "True or False? Terraform can only manage dependencies between resources if the <code class='inline'>depends_on</code> argument is explicitly set for the dependent resources. ",
    "options": [
      "True",
      "False"
    ],
    "answer": 1
  },
  {
    "question": "You have an existing resource in your public cloud that was deployed manually, but you want the ability to reference different attributes of that resource throughout your configuration without hardcoding any values. How can you accomplish this?",
    "options": [
      "Create a new <code class='inline'>resource</code> block that matches the exact configuration of the existing resource. Run a terraform apply to import the resource. Use the available exported attributes of that resource throughout your configuration as needed.",
      "Run a <code class='inline'>terraform state list</code> to find the <em>resource_id</em> of the resource you need the attributes from. Reference that <em>resource_id</em> throughout your configuration to get the exported attributes as needed.",
      "Create a new <code class='inline'>variable</code> block within your configuration. Add the <em>resource_id</em> as the default value and reference the variable using <code class='inline'>var.&lt;name&gt;</code> throughout your configuration as needed.",
      "Add a <code class='inline'>data</code> block to your configuration to query the existing resource. Use the available exported attributes of that resource type as needed throughout your configuration to get the values you need."
    ],
    "answer": 3
  },
  {
    "question": "When using Terraform, where can you install providers from? (select four)",
    "options": [
      "official HashiCorp releases site",
      "plugins directory",
      "the provider's source code",
      "Terraform plugin cache",
      "Terraform registry"
    ],
    "answers": [
      0,
      1,
      3,
      4
    ]
  },
  {
    "question": "Which of the following are true about Terraform providers? (select four)",
    "options": [
      "all providers are automatically included when downloading Terraform",
      "some providers are maintained by HashiCorp",
      "some providers are community-supported ",
      "they allow anybody to write a provider and publish it to the registry",
      "providers can be written and maintained by an outside organization, such as AWS, F5, or Microsoft"
    ],
    "answers": [
      1,
      2,
      3,
      4
    ]
  },
  {
    "question": "You are using Terraform Cloud to manage a new data analytics environment for your organization. You have decided to use Sentinel to enforce standardization and security controls. At what step are the Sentinel policies enforced during a run?",
    "options": [
      "before the plan phase has started to compare the changes to the existing infrastructure",
      "after the apply phase has completed any required changes",
      "before the OPA policies have been evaluated ",
      "after the plan, run tasks, cost estimation phases but before the apply phase"
    ],
    "answer": 3
  },
  {
    "question": "Your team is using Terraform, and multiple team members need to be able to manage the infrastructure. You need to support state locking to reduce the chance of corrupting the state file. What backends can you use to meet these requirements? (select three)",
    "options": [
      "<code class='inline'>s3</code> backend (with DynamoDB)",
      "<code class='inline'>kubernetes</code> backend",
      "<code class='inline'>consul</code> backend",
      "<code class='inline'>local</code> backend"
    ],
    "answers": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Which of the following is not true about the <code class='inline'>terraform.tfstate</code> file used by Terraform?",
    "options": [
      "the file can potentially contain sensitive values",
      "the file includes information about each resource managed by Terraform",
      "it is recommended not to modify the file directly",
      "it always matches the infrastructure deployed with Terraform"
    ],
    "answer": 3
  },
  {
    "question": "You work for a retail organization that has multiple peak seasons throughout the year. During those peak seasons, your applications need to be scaled up quickly to handle the increased demand. However, the deployment of application servers is manual and new servers are only deployed when problems are reported by users.\n\nHow can you reduce the effort required to deploy new resources, increase the speed of deployments, and reduce or eliminate the negative experiences of your customers?",
    "options": [
      "Rather than wait on user reports, implement a ticketing system that alerts the operations team of poor performance or customer errors. Automatically assign the tickets to the on-call team to quickly resolve.",
      "Deploy new IaC code that automatically shuts down existing application servers and scales the resources down during periods of high demand.",
      "Develop code that provisions new application servers programmatically. Use monitoring software to trigger a pipeline that deploys additional servers during periods of increased demand.",
      "Develop a manual runbook that the developers and operations teams can follow during the peak seasons to reconfigure the compute resources used to serve the primary application."
    ],
    "answer": 2
  },
  {
    "question": "True or False? <code class='inline'>min</code>, <code class='inline'>max</code>, <code class='inline'>format</code>, <code class='inline'>join</code>, <code class='inline'>trim</code>, and <code class='inline'>length</code> are examples of different expressions in Terraform.",
    "options": [
      "False",
      "True"
    ],
    "answer": 0
  },
  {
    "question": "Steve is a developer who is deploying resources to AWS using Terraform. Steve needs to gather detailed information about an EC2 instance that he deployed earlier in the day. What command can Steve use to view this detailed information?",
    "options": [
      "<code class='inline'>terraform state list</code> ",
      "<code class='inline'>terraform state rm aws_instance.frontend</code> ",
      "<code class='inline'>terraform state pull</code> ",
      "<code class='inline'>terraform state show aws_instance.frontend</code> "
    ],
    "answer": 3
  },
  {
    "question": "You have recently cloned a repo containing Terraform that you want to test in your environment. Once you customize the configuration, you run a <code class='inline'>terraform apply</code> but it immediately fails. Why would the apply fail?",
    "options": [
      "Terraform needs to obtain authentication credentials using the <code class='inline'>terraform login</code> command",
      "Terraform needs to initialize the directory and download the required plugins",
      "you need to run a <code class='inline'>terraform plan</code> before you can apply the configuration",
      "you can't run Terraform code that was cloned from another users code repository"
    ],
    "answer": 1
  },
  {
    "question": "You need to ensure your Terraform is easily readable and follows the HCL canonical format and style. In the current directory, you have a <code class='inline'>main.tf</code> that calls modules stored in a <code class='inline'>modules</code> directory. What command could you run to easily rewrite your Terraform to follow the HCL style in both the current directory and all sub-directories?",
    "options": [
      "<code class='inline'>terraform fmt -check</code> ",
      "<code class='inline'>terraform fmt -list=false</code> ",
      "<code class='inline'>terraform fmt -diff</code> ",
      "<code class='inline'>terraform fmt -recursive</code>"
    ],
    "answer": 3
  },
  {
    "question": "True or False? The <code class='inline'>terraform graph</code> command can be used to generate a visual representation of a configuration or execution plan.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "question": "Thomas has recently developed a new Terraform configuration in a new working directory and is very cost-conscious. After running a <code class='inline'>terraform init</code>, how can Thomas perform a dry run to ensure Terraform will create the right resources without deploying real-world resources?",
    "options": [
      "run <code class='inline'>terraform apply -refresh-only</code> ",
      "run <code class='inline'>terraform output</code> ",
      "run <code class='inline'>terraform show</code>",
      "run <code class='inline'>terraform plan -out=thomas</code> "
    ],
    "answer": 3
  },
  {
    "question": "By default, Terraform Community stores its state file in what type of backend?",
    "options": [
      "<code class='inline'>remote</code> backend",
      "<code class='inline'>encrypted</code> backend",
      "<code class='inline'>shared</code> backend",
      "<code class='inline'>local</code> backend"
    ],
    "answer": 3
  },
  {
    "question": "True or False? When using Terraform Cloud, committing code to your version control system (VCS) can automatically trigger a speculative plan on a workspace connected to the VCS.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following is true about working with modules?",
    "options": [
      "a module can only contain a single resource to be deployed or managed",
      "a single module can be called many times in a single configuration file",
      "every module that is called from a parent module must output values",
      "modules must be published to the Terraform registry before they can be used"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following Terraform offerings provides the ability to use a private registry?",
    "options": [
      "Terraform Community/CLI",
      "Terraform Cloud"
    ],
    "answer": 1
  },
  {
    "question": "True or False? Running a <code class='inline'>terraform fmt</code> will modify Terraform configuration files in the current working directory and all subdirectories.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1
  },
  {
    "question": "You need Terraform to destroy and recreate a single database server that was deployed with a bunch of other resources. You don't want to modify the Terraform code. What command can be used to accomplish this task?",
    "options": [
      "<code class='inline'>terraform state show aws_instance.database</code> ",
      "<code class='inline'>terraform plan -destroy=\"aws_instance.database\"</code> ",
      "<code class='inline'>terraform apply -replace=\"aws_instance.database\"</code> ",
      "<code class='inline'>terraform state rm aws_instance.database</code> "
    ],
    "answer": 2
  },
  {
    "question": "What are some of the benefits that Terraform providers offer to users? (select three)",
    "options": [
      "enforces security compliance across multiple cloud providers",
      "enables a plugin architecture that allows Terraform to be extensible without having to update Terraform core",
      "enables the deployment of resources to multiple platforms, such as public cloud, private cloud, or other SaaS, PaaS, or IaaS services",
      "abstracts the target platform's API from the end-user"
    ],
    "answers": [
      1,
      2,
      3
    ]
  },
  {
    "question": "What CLI commands will completely tear down and delete all resources that Terraform is currently managing? (select two)",
    "options": [
      "<code class='inline'>terraform apply -destroy</code> ",
      "<code class='inline'>terraform plan -destroy</code> ",
      "<code class='inline'>terraform destroy</code> ",
      "<code class='inline'>terraform apply -delete</code> "
    ],
    "answers": [
      0,
      2
    ]
  },
  {
    "question": "Your organization has standardized on Microsoft Azure to run its applications on PaaS, SaaS, and IaaS offerings. The deployment quickly standardized on Azure ARM to provision these resources quickly and efficiently.Which of the following is true about how the team currently deploys its infrastructure?",
    "options": [
      "the team would not be able to quickly adapt and integrate baseline security measures in its code to help standardize application deployments",
      "the team would not be able to use its existing skill set to develop code for newly announced services",
      "the adoption of another public cloud provider will prove to be more challenging since all of its codebase is based on Azure ARM",
      "the team would not be able to develop reusable code in order to reduce the time it takes to develop code for new applications"
    ],
    "answer": 2
  },
  {
    "question": "You are worried about unauthorized access to the Terraform state file since it might contain sensitive information. What are some ways you can protect the state file? (select two)",
    "options": [
      "replicate the state file to an encrypted storage device",
      "store in a remote backend that encrypts state at rest",
      "use the S3 backend using the <code class='inline'>encrypt</code> option to ensure state is encrypted",
      "enable native encryption in Terraform as configured in the <code class='inline'>terraform</code> block"
    ],
    "answers": [1, 2]
  },
  {
    "question": "Which of the following statements are true about using <code class='inline'>terraform import</code>? (select three)",
    "options": [
      "the resource address (example: <code class='inline'>aws_instance.web</code>) and resource ID (example: <code class='inline'>i-abdcef12345</code>) must be provided when importing a resource",
      "you must update your Terraform configuration for the imported resource before attempting to import the resource",
      "the terraform import command will automatically update the referenced Terraform resource block after the resource has been imported to ensure consistency",
      "using terraform import will bring the imported resource under Terraform management and add the new resource to the state file"
    ],
    "answers": [0, 1, 3]
  },
  {
    "question": "True or False? <code class='inline'>terraform validate</code> will validate the syntax of your <code class='inline'>HCL</code> files.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "question": "True or False? Official Terraform providers and modules are owned and maintained by HashiCorp.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1
  },
  {
    "question": "If supported by your backend, Terraform will lock your state for all operations that could write state. What purpose does this serve?",
    "options": [
      "Prevents others from committing Terraform code that could override your updates.",
      "Ensures the state file cannot be moved after the initial terraform apply",
      "Locks colleagues from making manual changes to the managed infrastructure",
      "This prevents others from acquiring the lock and potentially corrupting your state."
    ],
    "answer": 3
  },
  {
    "question": "True or False? When developing Terraform code, you must include a provider block for each unique provider so Terraform knows which ones you want to download and use.",
    "options": [
      "False",
      "True"
    ],
    "answer": 0
  },
  {
    "question": "You have a module named prod_subnet that outputs the subnet_id of the subnet created by the module. How would you reference the subnet ID when using it for an input of another module?",
    "options": [
      "subnet = prod_subnet.subnet_id",
      "subnet = prod_subnet.outputs.subnet_id",
      "subnet = module.outputs.prod_subnet.subnet_id",
      "subnet = module.prod_subnet.subnet_id"
    ],
    "answer": 3
  },
  {
    "question": "After using Terraform locally to deploy cloud resources, you have decided to move your state file to an Amazon S3 remote backend. You configure Terraform with the proper configuration as shown below. What command should be run in order to complete the state migration while copying the existing state to the new backend?\n<pre><code>terraform {\n  backend \"s3\" {\n    bucket = \"tf-bucket\"\n    key = \"terraform/krausen/\"\n    region = \"us-east-1\"\n  }\n}</code></pre>",
    "options": [
      "<code class='inline'>terraform apply -refresh-only</code>",
      "<code class='inline'>terraform plan -replace</code>",
      "<code class='inline'>terraform state show</code>",
      "<code class='inline'>terraform init -migrate-state</code>"
    ],
    "answer": 3
  },
  {
    "question": "Which of the following code snippets will properly configure a Terraform backend?",
    "options": [
      "<pre><code>data \"terraform_remote_state\" \"btk\" {\n  backend = \"etcd\"\n  config = {\n    path      = \"terraform/terraform.tfstate\"\n    endpoints = \"http://server1:4001\"\n  }\n}</code></pre>",
      "<pre><code>backend \"s3\" {\n  bucket = \"krausen-bucket\"\n  key    = \"terraform/\"\n  region = \"us-west-2\"\n }\n}</code></pre>",
      "<pre><code>terraform {\n  backend \"remote\" {\n    hostname = \"app.terraform.io\"\n    organization = \"btk\"\n    workspaces {\n      name = \"bryan-prod\"\n    }\n  }\n}</code></pre>",
      "<pre><code>provider \"consul\" {\n  address = \"consul.btk.com\"\n  scheme  = \"https\"\n  path    = \"terraform/\"\n  }\n}</code></pre>"
    ],
    "answer": 2
  },
  {
    "question": "Fill in the blank from the correct answer below:\nA Terraform module (usually the root module of a configuration) can *call* other modules to include their resources into the configuration. A module that has been called by another module is often referred to as _______________.",
    "options": [
      "parent module",
      "sourced module",
      "called module",
      "child module"
    ],
    "answer": 3
  },
  {
    "question": "Which of the following are tasks that <code class='inline'>terraform apply</code> can perform? (select three)",
    "options": [
      "provision new infrastructure",
      "generate a resource block for imported resources.",
      "update existing infrastructure with new configurations",
      "destroy infrastructure previously deployed with Terraform"
    ],
    "answers": [
      0,
      2,
      3
    ]
  },
  {
    "question": "When working with Terraform CLI/Community workspaces, what command can you use to display the current workspace you are working in?",
    "options": [
      "<code class='inline'>terraform workspace</code>",
      "<code class='inline'>terraform workspace select</code>",
      "<code class='inline'>terraform workspace new</code>",
      "<code class='inline'>terraform workspace show</code>"
    ],
    "answer": 3
  },
  {
    "question": "Based on the code snippet below, where is the module that the code is referencing?\n<pre><code>module \"server_subnet_1\" {\n  source          = \"./modules/web_server\"\n\n  ami             = data.aws_ami.ubuntu.id\n  key_name        = aws_key_pair.generated.key_name\n  user            = \"ubuntu\"\n  private_key     = tls_private_key.generated.private_key_pem\n  subnet_id       = aws_subnet.public_subnets[\"public_subnet_1\"].id\n  security_groups = [aws_security_group.vpc-ping.id, aws_security_group.vpc-web.id]\n}</code></pre>",
    "options": [
      "from the HashiCorp public registry",
      "from a Git repository",
      "in the <code class='inline'>modules</code> subdirectory in the current working directory where Terraform is being executed.",
      "from a Terraform Cloud or Enterprise private registry"
    ],
    "answer": 2
  },
  {
    "question": "You have deployed a virtual machine using Terraform. After a month, you realize that the operating system has become corrupted, and you want to redeploy the virtual machine. What is the best method to use to force Terraform to redeploy the virtual machine?",
    "options": [
      "run <code class='inline'>terraform apply</code> with the <code class='inline'>-target</code> option to specify the virtual machine resource",
      "run <code class='inline'>terraform apply</code> without any additional arguments and Terraform will automatically destroy the existing virtual machine and create a new one to replace it",
      "run <code class='inline'>terraform apply -replace=aws_instance.virtual_machine</code>",
      "run a <code class='inline'>terraform destroy</code> and then run <code class='inline'>terraform import</code> to pull in the other resources under Terraform management"
    ],
    "answer": 2
  },
  {
    "question": "When configuring a provider in Terraform, what is the best practice for setting a specific version of the provider?",
    "options": [
      "set the version constraint inside the provider block using <code class='inline'>version = \"3.5.0\"</code>",
      "set the version constraint inside the provider block using <code class='inline'>required_version = \"3.5.0\"</code>",
      "set the version constraint inside the <code class='inline'>required_providers</code> block",
      "set the version constraint using the <code class='inline'>terraform version -set=\"3.5.0\"</code> command"
    ],
    "answer": 2
  },
  {
    "question": "When using the default local backend in Terraform, where is the state file saved?",
    "options": [
      "in the <code class='inline'>.terraform</code> directory within the current working directory",
      "in the <code class='inline'>/tmp</code> directory of the operating system where Terraform is executed",
      "in the <code class='inline'>terraform.tfstate</code> file in the current working directory",
      "in the root directory of the operating system where Terraform is executed"
    ],
    "answer": 2
  },
  {
    "question": "True or False? The <code class='inline'>terraform import</code> command can automatically generate the configuration for the imported resource.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following is true about how Terraform state is used?",
    "options": [
      "it's used to deploy many resources at the same time to speed up the deployment",
      "it's used to reduce repeating the same expressions or values over and over in your code",
      "it's used to map real-world resources to your configuration and track metadata",
      "it's the block type that deploys actual resources"
    ],
    "answer": 2
  },
  {
    "question": "You have a security group in your Terraform configuration with a single rule: allowing port 22 from 0.0.0.0/0. A colleague manually changes the security group in the cloud console to allow port 80 as well. You then update the Terraform configuration to allow port 80 and run a <code class='inline'>terraform apply</code>. What will happen?",
    "options": [
      "Terraform will automatically revert the security group back to only port 22.",
      "Terraform will destroy and recreate the security group to match the configuration.",
      "Terraform will detect the drift and return an error.",
      "The <code class='inline'>terraform apply</code> command will see the configuration now matches the deployed infrastructure, so no changes will be made to the infrastructure."
    ],
    "answer": 3
  },
  {
    "question": "Which of the following is NOT a benefit of using Infrastructure as Code (IaC)?",
    "options": [
      "allows for code reusability",
      "standardizes application deployment procedures",
      "eliminating API communication to the target platform",
      "allows for better auditability"
    ],
    "answer": 2
  },
  {
    "question": "How are variables defined in Terraform?",
    "options": [
      "variables are defined using an <code class='inline'>inputs</code> block",
      "variables are defined using a <code class='inline'>var</code> block",
      "variables are defined using a <code class='inline'>variable</code> block",
      "variables are defined using a <code class='inline'>value</code> block"
    ],
    "answer": 2
  },
  {
    "question": "Which of the following are Terraform backends? (select two)",
    "options": [
      "Standard Backend",
      "Local Backend",
      "External Backend",
      "Remote Backend"
    ],
    "answers": [
      1,
      3
    ]
  },
  {
    "question": "Which of the following is NOT a benefit of using Infrastructure as Code (IaC)?",
    "options": [
      "allows for code reusability",
      "eliminating API communication to the target platform",
      "allows for better auditability",
      "standardizes application deployment procedures"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following is true about Terraform modules?",
    "options": [
      "modules must be located in the same directory as the root configuration",
      "only the root module can define resources for a given configuration",
      "modules are defined using a <code class='inline'>module</code> block in the configuration",
      "modules are used only to store output values for a given configuration"
    ],
    "answer": 2
  },
  {
    "question": "What is the purpose of the <code class='inline'>terraform refresh</code> command?",
    "options": [
      "to refresh the providers that are used in the configuration",
      "to update the state file with the current configuration of the resources in the cloud provider",
      "to ensure that the local state file matches the remote state file",
      "to update the state file with the current configuration of the deployed resources in the cloud provider"
    ],
    "answer": 3
  },
  {
    "question": "What is the primary function of a provider in Terraform?",
    "options": [
      "to store the state of the infrastructure",
      "to manage variables and outputs in the Terraform configuration",
      "to provide a layer of abstraction between the Terraform configuration and the cloud platform's API",
      "to manage and deploy applications to the cloud platform"
    ],
    "answer": 2
  },
  {
    "question": "Which of the following commands can be used to destroy the deployed infrastructure? (select two)",
    "options": [
      "<code class='inline'>terraform apply -destroy</code>",
      "<code class='inline'>terraform destroy</code>",
      "<code class='inline'>terraform apply -delete</code>",
      "<code class='inline'>terraform plan -destroy</code>"
    ],
    "answers": [
      0,
      1
    ]
  },
  {
    "question": "Which of the following is true about how Terraform outputs are used?",
    "options": [
      "it's used to deploy many resources at the same time to speed up the deployment",
      "it's used to reduce repeating the same expressions or values over and over in your code",
      "it's used to pull information about existing resources that are not managed by Terraform",
      "it's used to pass data out of a module or for use with the <code class='inline'>terraform output</code> command"
    ],
    "answer": 3
  },
  {
    "question": "Which of the following is true about Terraform local variables?",
    "options": [
      "local variables are defined using a <code class='inline'>local</code> block",
      "local variables are used to pass data out of a module or for use with the <code class='inline'>terraform output</code> command",
      "local variables are used to define configuration-specific data for a Terraform module",
      "local variables are used to pull information about existing resources that are not managed by Terraform"
    ],
    "answer": 0
  },
  {
    "question": "Which of the following commands are used as part of the core Terraform workflow? (select three)",
    "options": [
      "<code class='inline'>terraform state</code>",
      "<code class='inline'>terraform init</code>",
      "<code class='inline'>terraform destroy</code>",
      "<code class='inline'>terraform plan</code>",
      "<code class='inline'>terraform apply</code>"
    ],
    "answers": [
      1,
      3,
      4
    ]
  },
  {
    "question": "Which of the following can be used to set a variable value in Terraform? (select three)",
    "options": [
      "passing the value through an environment variable",
      "using the <code class='inline'>default</code> option in a variable block",
      "passing the value using the <code class='inline'>-var</code> option in a <code class='inline'>terraform plan</code> or <code class='inline'>terraform apply</code>",
      "setting the value inside the provider block"
    ],
    "answers": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Which of the following is the most secure way to pass sensitive data to Terraform?",
    "options": [
      "Hardcode the values inside the configuration",
      "Use environment variables",
      "Use the <code class='inline'>-var-file</code> option with a secrets file",
      "Use a variable for the sensitive data and retrieve the value from a secrets manager or cloud vault using a data source"
    ],
    "answer": 3
  },
  {
    "question": "True or False? The <code class='inline'>terraform state show</code> command is a read-only command and does not modify the state file.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "question": "You have a single configuration that deploys a virtual network, a subnet, and a virtual machine. You want to create a new key pair for the virtual machine, but you don't want Terraform to touch the other resources. What command should you use?",
    "options": [
      "<code class='inline'>terraform apply -target=aws_key_pair.generated</code>",
      "<code class='inline'>terraform apply -target=aws_key_pair.generated -auto-approve</code>",
      "<code class='inline'>terraform plan -target=aws_key_pair.generated</code>",
      "<code class='inline'>terraform plan -target=aws_key_pair.generated -out=tfplan</code>"
    ],
    "answer": 1
  },
  {
    "question": "When working with variables, which of the following file extensions can be used to pass variable values through a file? (select two)",
    "options": [
      "<code class='inline'>.tfvars.json</code>",
      "<code class='inline'>.tfvars.yaml</code>",
      "<code class='inline'>.tfvars</code>",
      "<code class='inline'>.jsonvars</code>"
    ],
    "answers": [
      0,
      2
    ]
  },
  {
    "question": "Which of the following best describes the difference between a local value and a variable?",
    "options": [
      "a local value is used to define an input variable, and a variable is used to define an output value",
      "a local value is used for expressions to reduce repetition, and a variable is used for input values for a module or configuration",
      "a local value is used for complex logic operations, and a variable is used for simple string manipulation",
      "a local value is used to store output data, and a variable is used to store input data"
    ],
    "answer": 1
  },
  {
    "question": "When developing a Terraform configuration, what are some of the advantages of using modules? (select two)",
    "options": [
      "Modules can only be used by the same person who created the module, providing a layer of security that prevents others from using them.",
      "Modules allow a group of resources to be packaged as a reusable component that can be referenced by other configurations.",
      "Modules allow you to deploy the same configuration multiple times for different purposes.",
      "Modules reduce the need to use a VCS like Git, since all the code is packaged together."
    ],
    "answers": [
      1,
      2
    ]
  },
  {
    "question": "What is the purpose of the <code class='inline'>terraform plan</code> command?",
    "options": [
      "to deploy the infrastructure defined in the configuration",
      "to destroy the infrastructure defined in the configuration",
      "to create a speculative execution plan to show what actions will be taken when deploying the infrastructure",
      "to validate the syntax of the configuration files"
    ],
    "answer": 2
  },
  {
    "question": "Which of the following is true about Terraform CLI/Community Workspaces?",
    "options": [
      "Workspaces enable you to logically group multiple cloud environments together.",
      "Workspaces enable you to quickly switch between different state files for a single configuration.",
      "Workspaces should be used to manage environments like production, staging, and development.",
      "Workspaces should be used to manage multiple regions within a single configuration."
    ],
    "answer": 1
  },
  {
    "question": "Which of the following commands can you use to check the output values from a deployed Terraform configuration?",
    "options": [
      "<code class='inline'>terraform state output</code>",
      "<code class='inline'>terraform output</code>",
      "<code class='inline'>terraform plan output</code>",
      "<code class='inline'>terraform show -output</code>"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following is the proper way to reference a data source in Terraform?",
    "options": [
      "<code class='inline'>data.aws_ami.ubuntu</code>",
      "<code class='inline'>data.aws_ami.ubuntu.id</code>",
      "<code class='inline'>data.ubuntu.id</code>",
      "<code class='inline'>data.source.aws_ami.ubuntu.id</code>"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following are benefits of using a remote backend for your Terraform state? (select three)",
    "options": [
      "Remote backends automatically encrypt state files for all supported backends, eliminating the need to use native encryption.",
      "Remote backends allow for collaboration with other team members.",
      "Remote backends provide state locking to prevent concurrent state modifications.",
      "Remote backends allow you to use a central location for storing state files, increasing the security and availability of your state file."
    ],
    "answers": [
      1,
      2,
      3
    ]
  },
  {
    "question": "When defining a provider, which of the following are required to successfully download and use the provider? (select two)",
    "options": [
      "You must include a <code class='inline'>provider</code> block.",
      "You must include a <code class='inline'>terraform</code> block.",
      "You must include a <code class='inline'>required_version</code> block.",
      "You must include a <code class='inline'>required_providers</code> block."
    ],
    "answers": [
      0,
      3
    ]
  },
  {
    "question": "True or False? You can use a <code class='inline'>terraform plan</code> to show output values.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "question": "Which of the following are true about using <code class='inline'>terraform state mv</code>? (select three)",
    "options": [
      "<code class='inline'>terraform state mv</code> is used to move a resource from one state file to another in a single operation.",
      "This command is mostly used for refactoring configurations when a resource needs to be renamed or its containing module needs to change.",
      "The <code class='inline'>terraform state mv</code> command modifies the state file by moving the resource from the source address to the destination address.",
      "<code class='inline'>terraform state mv</code> will also rename the resource name in the configuration automatically."
    ],
    "answers": [
      0,
      1,
      2
    ]
  },
  {
    "question": "You want to pull the latest Ubuntu 22.04 LTS AMI (Amazon Machine Image) for the AWS cloud platform. Which of the following Terraform block types can you use to get this information?",
    "options": [
      "Provider block",
      "Module block",
      "Data block",
      "Output block"
    ],
    "answer": 2
  },
  {
    "question": "Which of the following is the proper way to define the `type` of a variable in Terraform?",
    "options": [
      "<pre><code>variable \"access_key\" {\n  type = \"string\"\n}</code></pre>",
      "<pre><code>variable \"access_key\" {\n  type = string\n}</code></pre>",
      "<pre><code>variable \"access_key\" {\n  type \"string\"\n}</code></pre>",
      "<pre><code>variable \"access_key\" {\n  type: string\n}</code></pre>"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following commands can be used to validate the syntax of your Terraform configuration?",
    "options": [
      "<code class='inline'>terraform plan</code>",
      "<code class='inline'>terraform validate</code>",
      "<code class='inline'>terraform fmt</code>",
      "<code class='inline'>terraform check</code>"
    ],
    "answer": 1
  },
  {
    "question": "When using the <code class='inline'>terraform state rm</code> command, what is the effect on the deployed infrastructure?",
    "options": [
      "The command deletes the resource from the state file and deletes the resource from the deployed infrastructure.",
      "The command deletes the resource from the state file and leaves the resource in the deployed infrastructure.",
      "The command deletes the resource from the deployed infrastructure and leaves the resource in the state file.",
      "The command does nothing and returns an error."
    ],
    "answer": 1
  },
  {
    "question": "Which of the following is true about how Terraform outputs are used?",
    "options": [
      "it's used to deploy many resources at the same time to speed up the deployment",
      "it's used to pull information about existing resources that are not managed by Terraform",
      "it's used to reduce repeating the same expressions or values over and over in your code",
      "it's used to export values from the root module to the parent module"
    ],
    "answer": 3
  },
  {
    "question": "Which of the following is a Terraform primitive configuration block? (select three)",
    "options": [
      "Input Variables",
      "Resource Blocks",
      "Output Values",
      "Data Sources"
    ],
    "answers": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Which of the following are true about the <code class='inline'>terraform state rm</code> command? (select two)",
    "options": [
      "It modifies the state file by removing the specified resource from the state.",
      "It is commonly used to manually adjust the state file.",
      "It destroys the resource in the deployed infrastructure.",
      "It is a read-only command and does not modify the state file."
    ],
    "answers": [
      0,
      1
    ]
  },
  {
    "question": "What command can be used to display the resources that are being managed by Terraform?",
    "options": [
      "<code class='inline'>terraform version</code>",
      "<code class='inline'>terraform output</code>",
      "<code class='inline'>terraform state rm</code>",
      "<code class='inline'>terraform state list</code>"
    ],
    "answer": 3
  },
  {
    "question": "You have a security group in your Terraform configuration with a single rule: allowing port 22 from 0.0.0.0/0. A colleague manually changes the security group in the cloud console to allow port 80 as well. You then run a <code class='inline'>terraform apply</code>. What will happen?",
    "options": [
      "Terraform will automatically revert the security group back to only port 22.",
      "Terraform will destroy and recreate the security group to match the configuration.",
      "Terraform will detect the drift and return an error.",
      "The <code class='inline'>terraform apply</code> command will see the configuration does not match the deployed infrastructure and add port 80 to the security group configuration."
    ],
    "answer": 0
  },
  {
    "question": "Which of the following can be used to set a variable value in Terraform? (select three)",
    "options": [
      "passing the value through an environment variable",
      "using the <code class='inline'>default</code> option in a variable block",
      "passing the value using the <code class='inline'>-var</code> option in a <code class='inline'>terraform plan</code> or <code class='inline'>terraform apply</code>",
      "setting the value inside a <code class='inline'>locals</code> block"
    ],
    "answers": [
      0,
      1,
      2
    ]
  },
  {
    "question": "True or False? You can use the <code class='inline'>terraform plan</code> command to save an execution plan to a file.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "question": "Which of the following is true about how Terraform state is used?",
    "options": [
      "it's used to deploy many resources at the same time to speed up the deployment",
      "it's used to reduce repeating the same expressions or values over and over in your code",
      "it's used to calculate the changes that need to be made to the deployed infrastructure to match the configuration",
      "it's the block type that deploys actual resources"
    ],
    "answer": 2
  },
  {
    "question": "You are developing a Terraform configuration for an AWS VPC that contains several resources: an Internet Gateway, a VPC, a Subnet, and a Security Group. You decide that you want to apply the configuration in two different environments: staging and production. How can you deploy the two different environments using the same configuration?",
    "options": [
      "use two different workspaces in the same configuration, one for staging and one for production",
      "use the <code class='inline'>-target</code> option to deploy the two different environments",
      "create two different root modules, one for staging and one for production",
      "create two different <code class='inline'>terraform.tfstate</code> files, one for staging and one for production"
    ],
    "answer": 2
  },
  {
    "question": "What is the purpose of the <code class='inline'>terraform init</code> command?",
    "options": [
      "to deploy the infrastructure defined in the configuration",
      "to configure the backend and download the necessary providers and modules for a configuration",
      "to create a speculative execution plan to show what actions will be taken when deploying the infrastructure",
      "to destroy the infrastructure defined in the configuration"
    ],
    "answer": 1
  },
  {
    "question": "True or False? The <code class='inline'>terraform plan</code> command will modify the state file to reflect the desired state of the deployed infrastructure.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1
  },
  {
    "question": "You have a single configuration that deploys a virtual network, a subnet, and a virtual machine. You want to see the details of the deployed virtual network. What command should you use?",
    "options": [
      "<code class='inline'>terraform plan -target=aws_vpc.network</code>",
      "<code class='inline'>terraform state show aws_vpc.network</code>",
      "<code class='inline'>terraform state list aws_vpc.network</code>",
      "<code class='inline'>terraform show -target=aws_vpc.network</code>"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following is a benefit of using a remote backend for your Terraform state?",
    "options": [
      "Remote backends allow you to use a central location for storing state files, reducing the need to use a VCS like Git.",
      "Remote backends allow you to deploy many resources at the same time to speed up the deployment.",
      "Remote backends provide state locking to prevent concurrent state modifications.",
      "Remote backends allow you to use a central location for storing state files, increasing the security and availability of your state file."
    ],
    "answer": 2
  },
  {
    "question": "Which of the following is true about Terraform modules?",
    "options": [
      "Modules must be located in the same directory as the root configuration.",
      "Modules allow a group of resources to be packaged as a reusable component that can be referenced by other configurations.",
      "Modules are defined using an <code class='inline'>inputs</code> block in the configuration.",
      "Modules are used only to store output values for a given configuration."
    ],
    "answer": 1
  },
  {
    "question": "Which of the following is the proper way to define an output value in Terraform?",
    "options": [
      "<pre><code>output \"public_ip\" {\n  value = aws_instance.web.public_ip\n}</code></pre>",
      "<pre><code>output \"public_ip\" {\n  value \"aws_instance.web.public_ip\"\n}</code></pre>",
      "<pre><code>output \"public_ip\" {\n  variable = aws_instance.web.public_ip\n}</code></pre>",
      "<pre><code>output public_ip {\n  value = aws_instance.web.public_ip\n}</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "Which of the following code snippets will ensure you're using a specific version of the AWS provider?",
    "options": [
      "<pre><code>terraform {\n  required_providers {\n    aws = {\n      source = \"hashicorp/aws\"\n      version = \"5.66.0\"\n    }\n  }\n}</code></pre>",
      "<pre><code>provider \"aws\" {\n  region = \"us-east-2\"\n  required_version \">= 5.66.0\"\n}</code></pre>",
      "<pre><code>terraform {\n  provider \"aws\" {\n    version = \"5.66.0\"\n  }\n}</code></pre>",
      "<pre><code>provider \"aws\" {\n  version = \"5.66.0\"\n  region = \"us-east-2\"\n}</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "You are developing a Terraform configuration and want to deploy 10 identical virtual machines. Which of the following arguments can you use to achieve this goal?",
    "options": [
      "<code class='inline'>target</code>",
      "<code class='inline'>count</code>",
      "<code class='inline'>each</code>",
      "<code class='inline'>for_each</code>"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following are true about using <code class='inline'>terraform plan</code>? (select three)",
    "options": [
      "It is an optional command that can be skipped when deploying a configuration.",
      "It can be used to save an execution plan to a file using the <code class='inline'>-out</code> option.",
      "It is used to create a speculative execution plan to show what actions will be taken when deploying the infrastructure.",
      "It modifies the state file to reflect the desired state of the deployed infrastructure."
    ],
    "answers": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Which of the following commands can be used to retrieve the values of an output variable from a deployed Terraform configuration?",
    "options": [
      "<code class='inline'>terraform state output</code>",
      "<code class='inline'>terraform show</code>",
      "<code class='inline'>terraform plan output</code>",
      "<code class='inline'>terraform output</code>"
    ],
    "answer": 3
  },
  {
    "question": "Which of the following are benefits of using a remote backend for your Terraform state? (select three)",
    "options": [
      "Remote backends allow for collaboration with other team members.",
      "Remote backends automatically encrypt state files for all supported backends.",
      "Remote backends provide state locking to prevent concurrent state modifications.",
      "Remote backends allow you to use a central location for storing state files, increasing the security and availability of your state file."
    ],
    "answers": [
      0,
      2,
      3
    ]
  },
  {
    "question": "Which of the following is the proper way to reference a data source in Terraform?",
    "options": [
      "<code class='inline'>data.aws_ami.ubuntu.id</code>",
      "<code class='inline'>data.ubuntu.id</code>",
      "<code class='inline'>data.source.aws_ami.ubuntu.id</code>",
      "<code class='inline'>data.aws_ami.ubuntu</code>"
    ],
    "answer": 0
  },
  {
    "question": "What is the purpose of the <code class='inline'>terraform fmt</code> command?",
    "options": [
      "to validate the syntax of the configuration files",
      "to remove comments from the configuration files",
      "to rewrite the configuration files to a canonical format and style",
      "to apply the infrastructure changes defined in the configuration"
    ],
    "answer": 2
  },
  {
    "question": "Which of the following are true about local variables in Terraform? (select two)",
    "options": [
      "Local variables are defined using a <code class='inline'>local</code> block.",
      "Local variables are used to pass data out of a module or for use with the <code class='inline'>terraform output</code> command.",
      "Local variables assign a name to an expression to reduce repetition.",
      "Local variables are used to pull information about existing resources that are not managed by Terraform."
    ],
    "answers": [
      0,
      2
    ]
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nBy default, Terraform stores its state in a file named __",
    "answer": "terraform.tfstate",
    "type": "fill-in"
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nYou have the following code snippet as part of your Terraform configuration. How would you reference the <code>id</code> of the <code>s3_bucket</code>?\n\n```hcl\ndata \"aws_s3_bucket\" \"data_bucket\" {\n  bucket = \"my-data-lookup-bucket-bk\"\n}\n```\n",
    "answer": "data.aws_s3_bucket.data_bucket.id",
    "type": "fill-in"
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nWhat command can you use to display details about the resource as shown below?\n\n```hcl\nresource \"aws_internet_gateway\" \"demo\" {\n  vpc_id = aws_vpc.vpc.id\n  tags = {\n    Name = \"demo_igw\"\n  }\n}\n```\n",
    "answer": "terraform state show aws_internet_gateway.demo",
    "type": "fill-in"
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo specify a specific Terraform workspace named \"production\" when running commands, you can use the command __",
    "answer": "terraform workspace select production",
    "type": "fill-in"
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nYou need to access the attributes of a data source in your Terraform configuration for the following code. How should you reference the ID of the returned data? __\n\n```hcl\ndata \"aws_ami\" \"ubuntu\" {\n  most_recent = true\n\n  filter {\n    name   = \"name\"\n    values = [\"ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*\"]\n  }\n\n  owners = [\"099720109477\"]\n}\n```\n",
    "answer": "data.aws_ami.ubuntu.id",
    "type": "fill-in"
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo list all resources in the current state, you can use the command __",
    "answer": "terraform state list",
    "type": "fill-in"
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nYou have recently added new resource blocks from a different provider to your configuration. Type in the command you need to run before you can run a terraform plan/apply? __",
    "answer": "terraform init",
    "type": "fill-in"
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nYou can use the command __ to reformat your configuration files in the standard canonical style for HCL.",
    "answer": "terraform fmt",
    "type": "fill-in"
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nThe command __ can be used to ensure your code is syntactically valid and internally consistent.",
    "answer": "terraform validate",
    "type": "fill-in"
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nYou want Terraform to redeploy a specific resource that it is managing. Type the command you should use to mark the resource for replacement. __",
    "answer": "terraform apply -replace",
    "type": "fill-in"
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nHow can you reference all of the subnets created by this resource block?\n\n```hcl\n#Deploy the private subnets\nresource \"aws_subnet\" \"private_subnets\" {\n  for_each          = var.private_subnets\n  vpc_id            = aws_vpc.vpc.id\n  cidr_block        = cidrsubnet(var.vpc_cidr, 8, each.value)\n  availability_zone = tolist(data.aws_availability_zones.available.names)[each.value]\n\n  tags = {\n    Name      = each.key\n    Terraform = \"true\"\n  }\n}\n```\n",
    "answer": "aws_subnet.private_subnets[*]",
    "type": "fill-in"
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nYou are using Terraform Cloud to store your state file. Before you can use Terraform Cloud, you should run the command __ to obtain and save credentials for the remote backend.",
    "answer": "terraform login",
    "type": "fill-in"
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo skip the refresh step during a terraform apply, you can use the command __",
    "answer": "terraform apply -refresh=false",
    "type": "fill-in"
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo automatically apply changes without interactive confirmation, you can use the command __",
    "answer": "terraform apply -auto-approve",
    "type": "fill-in"
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nThe __ command can be used to get an interactive console to evaluate expressions in your Terraform code.",
    "answer": "terraform console",
    "type": "fill-in"
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nThe __ or the __ commands are available to delete all of your managed infrastructure.",
    "answer": "terraform destroy, terraform apply -destroy",
    "type": "fill-in"
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nThe command __ is used to extract the output variables defined in the Terraform configuration.",
    "answer": "terraform output",
    "type": "fill-in"
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nWhat command can be used to perform a dry-run of your changes and save the proposed changes to a file named bryan for future use? __",
    "answer": "terraform plan -out=bryan",
    "type": "fill-in"
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo force the destruction of resources without being prompted for confirmation, you can use the command __",
    "answer": "terraform destroy -auto-approve",
    "type": "fill-in"
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nIn order to check the current version of Terraform you have installed, you can use the command __",
    "answer": "terraform version",
    "type": "fill-in"
  }
]
