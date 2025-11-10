window.kubernetesTitle = "Kubernetes";
window.kubernetesQuizData = [
  {
    "question": "Which command is used to view the detailed information about a specific pod in Kubernetes?",
    "options": [
      "<pre><code>kubectl get pods</code></pre>",
      "<pre><code>kubectl describe pod [POD_NAME]</code></pre>",
      "<pre><code>kubectl logs [POD_NAME]</code></pre>",
      "<pre><code>kubectl exec -it [POD_NAME] -- /bin/bash</code></pre>"
    ],
    "answer": 1
  },
  {
    "question": "You want to scale a deployment named 'frontend' to 5 replicas. Which command should you use?",
    "options": [
      "<pre><code>kubectl scale deployment frontend --replicas=5</code></pre>",
      "<pre><code>kubectl set replicas frontend 5</code></pre>",
      "<pre><code>kubectl edit deployment frontend</code></pre>",
      "<pre><code>kubectl update deployment frontend --count 5</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo create a namespace named 'dev' in Kubernetes, you can use the command __",
    "answer": "kubectl create namespace dev",
    "type": "fill-in"
  },
  {
    "question": "Which of the following are valid Kubernetes resource types? (select three)",
    "options": [
      "Pod",
      "Deployment",
      "Stack",
      "Service",
      "NodeGroup"
    ],
    "answers": [0, 1, 3]
  },
  {
    "question": "You want to apply changes from a YAML file to your cluster. Which command should you use?",
    "options": [
      "<pre><code>kubectl apply -f file.yaml</code></pre>",
      "<pre><code>kubectl create -f file.yaml</code></pre>",
      "<pre><code>kubectl run -f file.yaml</code></pre>",
      "<pre><code>kubectl deploy -f file.yaml</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo get real-time logs of a pod named 'backend', you can use the command __",
    "answer": "kubectl logs -f backend",
    "type": "fill-in"
  },
  {
    "question": "Which command is used to open an interactive shell inside a running pod?",
    "options": [
      "<pre><code>kubectl exec -it [POD_NAME] -- /bin/bash</code></pre>",
      "<pre><code>kubectl shell [POD_NAME]</code></pre>",
      "<pre><code>kubectl login [POD_NAME]</code></pre>",
      "<pre><code>kubectl connect [POD_NAME]</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "Which of the following statements about Kubernetes Services are true? (select two)",
    "options": [
      "Services provide stable IPs for pods",
      "Services are used to scale pods automatically",
      "Services allow communication between different pods",
      "Services automatically update pod container images"
    ],
    "answers": [0, 2]
  },
  {
    "question": "You want to check the version of your kubectl client. Which command should you run?",
    "options": [
      "<pre><code>kubectl version --client</code></pre>",
      "<pre><code>kubectl check version</code></pre>",
      "<pre><code>kubectl info version</code></pre>",
      "<pre><code>kubectl get version</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo delete a deployment named 'frontend', you can use the command __",
    "answer": "kubectl delete deployment frontend",
    "type": "fill-in"
  },
  {
    "question": "You want to create a ConfigMap named 'app-config' from a file called config.yaml. Which command should you use?",
    "options": [
      "<pre><code>kubectl create configmap app-config --from-file=config.yaml</code></pre>",
      "<pre><code>kubectl apply configmap app-config -f config.yaml</code></pre>",
      "<pre><code>kubectl set configmap app-config config.yaml</code></pre>",
      "<pre><code>kubectl configmap create app-config config.yaml</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo view the data stored in a ConfigMap named 'app-config', you can use the command __",
    "answer": "kubectl describe configmap app-config",
    "type": "fill-in"
  },
  {
    "question": "Which of the following statements about Kubernetes Secrets are true? (select two)",
    "options": [
      "Secrets are stored in plain text by default",
      "Secrets can be mounted as volumes or environment variables",
      "Secrets automatically encrypt themselves using AES-256",
      "Secrets should be used to store sensitive information like passwords or tokens"
    ],
    "answers": [1, 3]
  },
  {
    "question": "You need to create a Secret named 'db-secret' with username 'admin' and password 's3cr3t'. Which command is correct?",
    "options": [
      "<pre><code>kubectl create secret generic db-secret --from-literal=username=admin --from-literal=password=s3cr3t</code></pre>",
      "<pre><code>kubectl apply secret db-secret --username=admin --password=s3cr3t</code></pre>",
      "<pre><code>kubectl secret create db-secret --username admin --password s3cr3t</code></pre>",
      "<pre><code>kubectl set secret db-secret username=admin password=s3cr3t</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nA StatefulSet is used in Kubernetes to manage __ pods that require stable network identities and persistent storage.",
    "answer": "stateful",
    "type": "fill-in"
  },
  {
    "question": "Which of the following are valid use cases for StatefulSets? (select two)",
    "options": [
      "Running a Redis cluster",
      "Running stateless web servers",
      "Running a MySQL cluster",
      "Running a Kubernetes deployment for front-end apps"
    ],
    "answers": [0, 2]
  },
  {
    "question": "You want to grant a user named 'developer' permission to read pods in the 'dev' namespace. Which resource type should you use?",
    "options": [
      "ServiceAccount",
      "Role",
      "ClusterRoleBinding",
      "RoleBinding"
    ],
    "answer": 3
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo see all roles and role bindings in the 'prod' namespace, you can use the command __",
    "answer": "kubectl get roles,rolebindings -n prod",
    "type": "fill-in"
  },
  {
    "question": "Which of the following statements about RBAC in Kubernetes are true? (select three)",
    "options": [
      "Roles define a set of permissions within a namespace",
      "RoleBindings attach roles to users or groups",
      "ClusterRoles are limited to a single namespace",
      "ClusterRoleBindings attach ClusterRoles to users or groups globally"
    ],
    "answers": [0, 1, 3]
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo delete a Secret named 'db-secret' in the 'prod' namespace, you can use the command __",
    "answer": "kubectl delete secret db-secret -n prod",
    "type": "fill-in"
  },
  {
    "question": "Which type of Kubernetes Service exposes pods internally within the cluster only?",
    "options": [
      "ClusterIP",
      "NodePort",
      "LoadBalancer",
      "ExternalName"
    ],
    "answer": 0
  },
  {
    "question": "You want to expose a deployment named 'frontend' on port 80 of every node in your cluster. Which Service type should you use?",
    "options": [
      "ClusterIP",
      "NodePort",
      "LoadBalancer",
      "Headless"
    ],
    "answer": 1
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo view all services running in the 'dev' namespace, you can use the command __",
    "answer": "kubectl get svc -n dev",
    "type": "fill-in"
  },
  {
    "question": "Which of the following statements about LoadBalancer Services are true? (select two)",
    "options": [
      "They automatically create an external IP in cloud environments",
      "They are only used for internal traffic within the cluster",
      "They can be used to expose applications to the internet",
      "They automatically configure DNS records for the service"
    ],
    "answers": [0, 2]
  },
  {
    "question": "You are creating an Ingress resource. Which of the following is required for it to route HTTP traffic correctly?",
    "options": [
      "A Service that targets the backend pods",
      "A StatefulSet managing the backend pods",
      "A ClusterRoleBinding for the Ingress controller",
      "A ConfigMap with pod metrics"
    ],
    "answer": 0
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo view the endpoints (IP addresses) for a service named 'backend', you can use the command __",
    "answer": "kubectl get endpoints backend",
    "type": "fill-in"
  },
  {
    "question": "Which of the following statements about Ingress controllers are true? (select two)",
    "options": [
      "Ingress controllers manage HTTP and HTTPS routing",
      "Ingress controllers automatically create Services",
      "You can have multiple Ingress controllers in the same cluster",
      "Ingress controllers replace Services entirely"
    ],
    "answers": [0, 2]
  },
  {
    "question": "You want to debug network connectivity between two pods. Which kubectl command can help you test connectivity?",
    "options": [
      "<pre><code>kubectl exec -it [POD_NAME] -- ping [TARGET_POD_IP]</code></pre>",
      "<pre><code>kubectl logs [POD_NAME] --network-test [TARGET_POD]</code></pre>",
      "<pre><code>kubectl netcheck [POD_NAME] [TARGET_POD]</code></pre>",
      "<pre><code>kubectl network-test [POD_NAME] [TARGET_POD]</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo apply a YAML manifest for an Ingress resource, you can use the command __",
    "answer": "kubectl apply -f ingress.yaml",
    "type": "fill-in"
  },
  {
    "question": "Which of the following Kubernetes Service types is typically used for headless services, where you want direct pod IPs instead of a single ClusterIP?",
    "options": [
      "ClusterIP",
      "NodePort",
      "LoadBalancer",
      "Headless"
    ],
    "answer": 3
  },
  {
    "question": "Which of the following is a correct way to define a PersistentVolumeClaim for 5Gi of storage in Kubernetes?",
    "options": [
      "<pre><code>apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: my-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 5Gi\n</code></pre>",
      "<pre><code>apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: my-pvc\nspec:\n  size: 5Gi\n  accessMode: ReadWriteOnce\n</code></pre>",
      "<pre><code>apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: my-pvc\nspec:\n  storage: 5Gi\n</code></pre>",
      "<pre><code>apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: my-pvc\nspec:\n  volume: 5Gi\n</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo check the status of all PersistentVolumeClaims in the 'prod' namespace, you can use the command __",
    "answer": "kubectl get pvc -n prod",
    "type": "fill-in"
  },
  {
    "question": "Which of the following statements about StorageClasses are true? (select two)",
    "options": [
      "StorageClasses define how dynamic volumes are provisioned",
      "StorageClasses can specify the provisioner, like AWS EBS or GCE PD",
      "StorageClasses automatically create PVCs for every pod",
      "StorageClasses are required for static volumes only"
    ],
    "answers": [0, 1]
  },
  {
    "question": "You want to delete a PersistentVolumeClaim named 'data-pvc' in the 'dev' namespace. Which command should you use?",
    "options": [
      "<pre><code>kubectl delete pvc data-pvc -n dev</code></pre>",
      "<pre><code>kubectl remove pvc data-pvc -n dev</code></pre>",
      "<pre><code>kubectl delete volume data-pvc</code></pre>",
      "<pre><code>kubectl remove volume data-pvc -n dev</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo mount a PVC named 'data-pvc' into a pod at path '/mnt/data', you define it under __ in the pod spec.",
    "answer": "volumes and volumeMounts",
    "type": "fill-in"
  },
  {
    "question": "Which of the following access modes allows multiple pods to read and write to the same volume simultaneously?",
    "options": [
      "ReadWriteOnce",
      "ReadOnlyMany",
      "ReadWriteMany",
      "WriteOnceMany"
    ],
    "answer": 2
  },
  {
    "question": "You want a PVC to be dynamically provisioned with the default StorageClass. Which field should you omit in your PVC manifest?",
    "options": [
      "storageClassName",
      "accessModes",
      "resources.requests.storage",
      "metadata.name"
    ],
    "answer": 0
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo view detailed information about a PersistentVolume named 'pv-data', you can use the command __",
    "answer": "kubectl describe pv pv-data",
    "type": "fill-in"
  },
  {
    "question": "Which of the following statements about PersistentVolumes (PVs) are true? (select two)",
    "options": [
      "PVs are cluster resources independent of pods",
      "PVs are created automatically for every pod",
      "PVs define storage capacity, access modes, and reclaim policy",
      "PVs cannot be used with PVCs"
    ],
    "answers": [0, 2]
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nA 'Retain' reclaim policy for a PersistentVolume means __",
    "answer": "the volume will not be deleted when the PVC is deleted",
    "type": "fill-in"
  },
  {
    "question": "Which command shows the current status of all pods in the 'dev' namespace with wide output including node assignment?",
    "options": [
      "<pre><code>kubectl get pods -n dev -o wide</code></pre>",
      "<pre><code>kubectl describe pods -n dev -o wide</code></pre>",
      "<pre><code>kubectl get all -n dev</code></pre>",
      "<pre><code>kubectl get pods -n dev --details</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "You notice a pod is in 'CrashLoopBackOff' status. Which commands are most useful to diagnose the issue? (select three)",
    "options": [
      "kubectl logs [POD_NAME]",
      "kubectl describe pod [POD_NAME]",
      "kubectl exec -it [POD_NAME] -- /bin/bash",
      "kubectl scale pod [POD_NAME] --replicas=2"
    ],
    "answers": [0, 1, 2]
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo restart a deployment named 'backend' without changing its spec, you can use the command __",
    "answer": "kubectl rollout restart deployment backend",
    "type": "fill-in"
  },
  {
    "question": "Which kubectl command shows the rollout status of a deployment named 'frontend'?",
    "options": [
      "<pre><code>kubectl rollout status deployment frontend</code></pre>",
      "<pre><code>kubectl get deployment frontend --status</code></pre>",
      "<pre><code>kubectl describe deployment frontend --rollout</code></pre>",
      "<pre><code>kubectl status deployment frontend</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "You want to undo the last deployment rollout for 'frontend'. Which command is correct?",
    "options": [
      "<pre><code>kubectl rollout undo deployment frontend</code></pre>",
      "<pre><code>kubectl revert deployment frontend</code></pre>",
      "<pre><code>kubectl rollback deployment frontend</code></pre>",
      "<pre><code>kubectl reset deployment frontend</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo view events in the 'prod' namespace that may indicate pod or deployment issues, you can use the command __",
    "answer": "kubectl get events -n prod --sort-by=.metadata.creationTimestamp",
    "type": "fill-in"
  },
  {
    "question": "Which of the following are common causes of pods being stuck in 'Pending' status? (select three)",
    "options": [
      "Insufficient CPU or memory on nodes",
      "NodeSelector or Taints/Tolerations preventing scheduling",
      "ImagePullBackOff due to invalid container image",
      "PVC not bound due to unavailable PersistentVolume"
    ],
    "answers": [0, 1, 3]
  },
  {
    "question": "You attempt to exec into a pod, but it fails with 'container not found'. Which could be the reason? (select two)",
    "options": [
      "The pod has multiple containers and the container name wasn't specified",
      "The pod has already terminated",
      "The pod is using a StatefulSet",
      "kubectl version is outdated"
    ],
    "answers": [0, 1]
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo check the resource usage of pods in real time, you can use the command __",
    "answer": "kubectl top pods",
    "type": "fill-in"
  },
  {
    "question": "Which of the following kubectl commands allows you to port-forward from a local machine to a pod named 'backend'? ",
    "options": [
      "<pre><code>kubectl port-forward pod/backend 8080:80</code></pre>",
      "<pre><code>kubectl forward-port backend 8080:80</code></pre>",
      "<pre><code>kubectl proxy pod/backend --port 8080</code></pre>",
      "<pre><code>kubectl expose pod/backend --port 8080</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "You want to check why a pod failed to pull an image. Which kubectl command provides detailed events and reasons?",
    "options": [
      "<pre><code>kubectl describe pod [POD_NAME]</code></pre>",
      "<pre><code>kubectl logs [POD_NAME]</code></pre>",
      "<pre><code>kubectl get events [POD_NAME]</code></pre>",
      "<pre><code>kubectl check image [POD_NAME]</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo debug a pod using ephemeral containers, you can use the command __",
    "answer": "kubectl debug -it [POD_NAME] --image=busybox",
    "type": "fill-in"
  },
  {
    "question": "Which of the following are valid reasons for pods being in 'ImagePullBackOff' status? (select three)",
    "options": [
      "Incorrect image name or tag",
      "Private registry authentication failure",
      "PVC not available",
      "Node running out of disk space"
    ],
    "answers": [0, 1, 3]
  },
  {
    "question": "You notice high restart counts for a pod. Which kubectl command gives you the restart count per container?",
    "options": [
      "<pre><code>kubectl get pods [POD_NAME] -o wide</code></pre>",
      "<pre><code>kubectl describe pod [POD_NAME]</code></pre>",
      "<pre><code>kubectl logs [POD_NAME]</code></pre>",
      "<pre><code>kubectl top pod [POD_NAME]</code></pre>"
    ],
    "answer": 1
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo edit the live manifest of a deployment named 'frontend', you can use the command __",
    "answer": "kubectl edit deployment frontend",
    "type": "fill-in"
  },
  {
    "question": "Which of the following scenarios can cause a pod to remain in 'Terminating' state indefinitely? (select two)",
    "options": [
      "Finalizers defined on the pod",
      "Node running out of CPU",
      "Pod stuck deleting a PersistentVolume",
      "ImagePullBackOff"
    ],
    "answers": [0, 2]
  },
  {
    "question": "You want to check which node a pod is running on. Which field from the 'kubectl get pods -o wide' output provides this information?",
    "options": [
      "NODE",
      "IP",
      "HOSTNAME",
      "STATUS"
    ],
    "answer": 0
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo temporarily pause a deployment named 'backend' rollout, you can use the command __",
    "answer": "kubectl rollout pause deployment backend",
    "type": "fill-in"
  },
  {
    "question": "You want to see the history of rollouts for a deployment named 'frontend'. Which command should you run?",
    "options": [
      "<pre><code>kubectl rollout history deployment frontend</code></pre>",
      "<pre><code>kubectl describe deployment frontend --history</code></pre>",
      "<pre><code>kubectl get rollout frontend</code></pre>",
      "<pre><code>kubectl logs deployment frontend</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo attach to a running container in a pod named 'backend' to see its real-time output, you can use the command __",
    "answer": "kubectl attach -it backend",
    "type": "fill-in"
  },
  {
    "question": "You notice a node is marked 'NotReady'. Which kubectl command shows detailed node conditions and status?",
    "options": [
      "<pre><code>kubectl describe node [NODE_NAME]</code></pre>",
      "<pre><code>kubectl get nodes [NODE_NAME] -o wide</code></pre>",
      "<pre><code>kubectl logs node [NODE_NAME]</code></pre>",
      "<pre><code>kubectl check node [NODE_NAME]</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo view the status of all nodes including Ready/NotReady conditions, you can use the command __",
    "answer": "kubectl get nodes",
    "type": "fill-in"
  },
  {
    "question": "Which of the following are common causes for a node being in 'NotReady' status? (select three)",
    "options": [
      "Kubelet not running on the node",
      "Network plugin (CNI) misconfiguration",
      "Pod running out of memory",
      "Disk pressure or resource exhaustion on the node"
    ],
    "answers": [0, 1, 3]
  },
  {
    "question": "You suspect that kube-proxy is not correctly handling service traffic. Which command helps you check kube-proxy pods?",
    "options": [
      "<pre><code>kubectl get pods -n kube-system -l k8s-app=kube-proxy</code></pre>",
      "<pre><code>kubectl describe daemonset kube-proxy -n kube-system</code></pre>",
      "<pre><code>kubectl logs -n kube-system kube-proxy</code></pre>",
      "<pre><code>All of the above</code></pre>"
    ],
    "answer": 3
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo check if the cluster DNS is working properly, you can deploy a pod and use the command __ to resolve a service name inside it.",
    "answer": "nslookup [SERVICE_NAME] or dig [SERVICE_NAME]",
    "type": "fill-in"
  },
  {
    "question": "Which of the following are common symptoms of CNI (network plugin) issues? (select three)",
    "options": [
      "Pods unable to communicate across nodes",
      "Service ClusterIP unreachable",
      "Pods in CrashLoopBackOff",
      "Pod IPs missing from endpoints"
    ],
    "answers": [0, 1, 3]
  },
  {
    "question": "You need to check API server health in a cluster. Which command provides a quick readiness check?",
    "options": [
      "<pre><code>kubectl get --raw=/healthz</code></pre>",
      "<pre><code>kubectl describe apiserver</code></pre>",
      "<pre><code>kubectl logs kube-apiserver</code></pre>",
      "<pre><code>kubectl get apiserver</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo view logs of the kubelet running on a node named 'worker-1', you can use the command __",
    "answer": "journalctl -u kubelet -f",
    "type": "fill-in"
  },
  {
    "question": "Which of the following are potential reasons for pods not being scheduled on a node? (select three)",
    "options": [
      "Node taints prevent scheduling without tolerations",
      "Insufficient CPU or memory on the node",
      "Pod has a PVC that is not bound",
      "ClusterRoleBinding missing for the pod"
    ],
    "answers": [0, 1, 2]
  },
  {
    "question": "You want to debug connectivity from a pod to the API server. Which command can you use inside the pod?",
    "options": [
      "<pre><code>curl -k https://kubernetes.default.svc</code></pre>",
      "<pre><code>ping kube-apiserver</code></pre>",
      "<pre><code>kubectl exec --check api</code></pre>",
      "<pre><code>nslookup kubernetes.default</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo check which pods are managed by a specific DaemonSet named 'fluentd', you can use the command __",
    "answer": "kubectl get pods -l name=fluentd",
    "type": "fill-in"
  },
  {
    "question": "Which of the following commands allows you to inspect cluster component statuses like scheduler, controller-manager, and etcd?",
    "options": [
      "<pre><code>kubectl get componentstatuses</code></pre>",
      "<pre><code>kubectl get nodes</code></pre>",
      "<pre><code>kubectl describe cluster</code></pre>",
      "<pre><code>kubectl check components</code></pre>"
    ],
    "answer": 0
  },
  {
    "question": "You notice high API server request latency. Which tools or metrics can help troubleshoot this? (select three)",
    "options": [
      "kubectl top nodes",
      "Etcd metrics from Prometheus",
      "API server audit logs",
      "Pod logs in default namespace"
    ],
    "answers": [0, 1, 2]
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo reset a node and remove all workloads for troubleshooting, you can use the command __",
    "answer": "kubectl drain [NODE_NAME] --ignore-daemonsets",
    "type": "fill-in"
  },
  {
    "question": "Which of the following are signs that kube-proxy or networking rules may be misconfigured? (select two)",
    "options": [
      "ClusterIP services are unreachable from pods",
      "Pods frequently restart with CrashLoopBackOff",
      "NodeReady status fluctuates",
      "Pods can't reach external internet services"
    ],
    "answers": [0, 3]
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo see cluster-wide events sorted by timestamp for troubleshooting, you can use the command __",
    "answer": "kubectl get events --all-namespaces --sort-by=.metadata.creationTimestamp",
    "type": "fill-in"
  },
  {
    "question": "You need to see detailed information about a pod named 'api-server', including events and conditions. Which command should you use?",
    "options": [
      "<pre><code>kubectl get pod api-server</code></pre>",
      "<pre><code>kubectl describe pod api-server</code></pre>",
      "<pre><code>kubectl logs api-server</code></pre>",
      "<pre><code>kubectl exec -it api-server -- /bin/bash</code></pre>"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following are valid ways to scale a deployment named 'frontend'? (select two)",
    "options": [
      "kubectl scale deployment frontend --replicas=5",
      "kubectl edit deployment frontend and change spec.replicas",
      "kubectl set replicas frontend 5",
      "kubectl patch deployment frontend --replicas=5"
    ],
    "answers": [0, 1]
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo create a Secret named 'api-key' with a key 'token' and value 'abc123', you can use the command __",
    "answer": "kubectl create secret generic api-key --from-literal=token=abc123",
    "type": "fill-in"
  },
  {
    "question": "Which of the following statements about ClusterIP services are true? (select two)",
    "options": [
      "ClusterIP exposes the service only within the cluster",
      "ClusterIP automatically creates an external load balancer",
      "ClusterIP provides a stable internal IP for the service",
      "ClusterIP is required for Ingress routing"
    ],
    "answers": [0, 2]
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo mount a PersistentVolumeClaim named 'data-pvc' into a pod at '/mnt/data', you must define it under __ in the pod spec.",
    "answer": "volumes and volumeMounts",
    "type": "fill-in"
  },
  {
    "question": "You notice a pod is stuck in 'Pending' status. Which could be a possible reason? (select three)",
    "options": [
      "Insufficient resources on nodes",
      "NodeSelector or taints prevent scheduling",
      "PVC not bound",
      "Container image has CrashLoopBackOff"
    ],
    "answers": [0, 1, 2]
  },
  {
    "question": "To check which node a pod named 'backend' is running on, which field from 'kubectl get pods -o wide' should you check?",
    "options": [
      "NODE",
      "IP",
      "HOSTNAME",
      "STATUS"
    ],
    "answer": 0
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo restart all pods of a deployment named 'frontend' without changing its spec, you can use the command __",
    "answer": "kubectl rollout restart deployment frontend",
    "type": "fill-in"
  },
  {
    "question": "Which of the following are common symptoms of a CNI/network plugin issue? (select three)",
    "options": [
      "Pods cannot communicate across nodes",
      "Service ClusterIP unreachable",
      "Pods in CrashLoopBackOff",
      "Pod IPs missing from endpoints"
    ],
    "answers": [0, 1, 3]
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo view all ConfigMaps in the 'dev' namespace, you can use the command __",
    "answer": "kubectl get configmaps -n dev",
    "type": "fill-in"
  },
  {
    "question": "Which command shows real-time resource usage (CPU/memory) of all pods in the current namespace?",
    "options": [
      "<pre><code>kubectl describe pods</code></pre>",
      "<pre><code>kubectl get pods -o wide</code></pre>",
      "<pre><code>kubectl top pods</code></pre>",
      "<pre><code>kubectl logs pods</code></pre>"
    ],
    "answer": 2
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo view cluster-wide events sorted by creation timestamp, you can use the command __",
    "answer": "kubectl get events --all-namespaces --sort-by=.metadata.creationTimestamp",
    "type": "fill-in"
  },
  {
    "question": "You notice high restart counts for a pod. Which command helps you see the restart count per container?",
    "options": [
      "<pre><code>kubectl get pods -o wide</code></pre>",
      "<pre><code>kubectl describe pod [POD_NAME]</code></pre>",
      "<pre><code>kubectl logs [POD_NAME]</code></pre>",
      "<pre><code>kubectl top pod [POD_NAME]</code></pre>"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following are reasons a pod might remain in 'Terminating' state? (select two)",
    "options": [
      "Finalizers defined on the pod",
      "Node running out of CPU",
      "Pod stuck deleting a PersistentVolume",
      "Container image not found"
    ],
    "answers": [0, 2]
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo deploy an Ingress resource defined in 'ingress.yaml', you can use the command __",
    "answer": "kubectl apply -f ingress.yaml",
    "type": "fill-in"
  },
  {
    "question": "A pod in the 'dev' namespace is in 'CrashLoopBackOff'. Which steps would you take to troubleshoot it? (select three)",
    "options": [
      "kubectl logs [POD_NAME]",
      "kubectl describe pod [POD_NAME]",
      "kubectl exec -it [POD_NAME] -- /bin/bash",
      "kubectl scale deployment [DEPLOYMENT_NAME] --replicas=0"
    ],
    "answers": [0, 1, 2]
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo rollback a deployment named 'backend' to its previous revision, you can use the command __",
    "answer": "kubectl rollout undo deployment backend",
    "type": "fill-in"
  },
  {
    "question": "You notice that pods cannot communicate across nodes. Which are possible causes? (select three)",
    "options": [
      "CNI plugin misconfiguration",
      "Node firewall blocking pod network traffic",
      "Pod has insufficient CPU",
      "kube-proxy not running on nodes"
    ],
    "answers": [0, 1, 3]
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo see which pods are consuming the most CPU and memory in real time, you can use the command __",
    "answer": "kubectl top pods --all-namespaces",
    "type": "fill-in"
  },
  {
    "question": "A pod fails to start because it cannot mount a PVC. Which are likely reasons? (select three)",
    "options": [
      "No available PersistentVolume matches the PVC request",
      "PVC is bound to another pod in ReadWriteOnce mode",
      "Pod spec does not reference the PVC correctly",
      "Container image is not found"
    ],
    "answers": [0, 1, 2]
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo check events in the 'prod' namespace sorted by timestamp, you can use the command __",
    "answer": "kubectl get events -n prod --sort-by=.metadata.creationTimestamp",
    "type": "fill-in"
  },
  {
    "question": "You deployed a new version of a frontend deployment, but users report 503 errors. Which steps would you check first? (select three)",
    "options": [
      "kubectl get pods -n frontend",
      "kubectl describe svc frontend",
      "kubectl get ingress frontend",
      "kubectl logs of unrelated backend pods"
    ],
    "answers": [0, 1, 2]
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo forward local port 8080 to port 80 of a pod named 'backend', you can use the command __",
    "answer": "kubectl port-forward pod/backend 8080:80",
    "type": "fill-in"
  },
  {
    "question": "Which of the following can cause a deployment to never reach the desired number of replicas? (select three)",
    "options": [
      "NodeSelector or taints preventing scheduling",
      "Pods stuck in CrashLoopBackOff",
      "PVC not bound",
      "ClusterRoleBinding missing for pods"
    ],
    "answers": [0, 1, 2]
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo temporarily pause a rollout of a deployment named 'api', you can use the command __",
    "answer": "kubectl rollout pause deployment api",
    "type": "fill-in"
  },
  {
    "question": "You see pods in 'ImagePullBackOff'. Which are likely causes? (select three)",
    "options": [
      "Incorrect image name or tag",
      "Private registry authentication failure",
      "CNI plugin misconfiguration",
      "Node disk pressure"
    ],
    "answers": [0, 1, 3]
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo debug a pod using an ephemeral container with the busybox image, you can use the command __",
    "answer": "kubectl debug -it [POD_NAME] --image=busybox",
    "type": "fill-in"
  },
  {
    "question": "A node is marked 'NotReady'. Which of the following steps help troubleshoot the issue? (select three)",
    "options": [
      "kubectl describe node [NODE_NAME]",
      "journalctl -u kubelet -f",
      "kubectl logs pod on the node",
      "kubectl top pods"
    ],
    "answers": [0, 1, 2]
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo check the rollout history of a deployment named 'frontend', you can use the command __",
    "answer": "kubectl rollout history deployment frontend",
    "type": "fill-in"
  },
  {
    "question": "You deployed an Ingress but requests are not reaching your service. Which could be possible causes? (select three)",
    "options": [
      "Ingress controller not running",
      "Service misconfigured (wrong port or selector)",
      "Pod images are incorrect",
      "Ingress rules or host/path mismatch"
    ],
    "answers": [0, 1, 3]
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo see the IPs of pods backing a service named 'backend', you can use the command __",
    "answer": "kubectl get endpoints backend",
    "type": "fill-in"
  },
  {
    "question": "Which are common symptoms of CNI/network plugin misconfiguration? (select three)",
    "options": [
      "Pods cannot communicate across nodes",
      "ClusterIP services unreachable",
      "Node marked NotReady",
      "Pods in CrashLoopBackOff"
    ],
    "answers": [0, 1, 2]
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo delete a pod named 'test-pod' immediately without waiting for graceful termination, you can use the command __",
    "answer": "kubectl delete pod test-pod --grace-period=0 --force",
    "type": "fill-in"
  },
  {
    "question": "A pod is stuck in 'Terminating' state. Which are likely causes? (select two)",
    "options": [
      "Finalizers defined on the pod",
      "PVC stuck deleting",
      "Insufficient CPU on the node",
      "ImagePullBackOff"
    ],
    "answers": [0, 1]
  },
  {
    "question": "Please fill the blank field(s) in the statement with the right words.\nTo edit the live manifest of a deployment named 'backend', you can use the command __",
    "answer": "kubectl edit deployment backend",
    "type": "fill-in"
  }
];
