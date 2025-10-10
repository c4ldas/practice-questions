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
  }
]