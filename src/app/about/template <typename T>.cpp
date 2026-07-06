template <typename T>
void LinkedTable<T>::AddColumn(const std::string& col_desc) {
    col_descs_.push_back(col_desc);

    for (auto& pair : rows_) {
        Node*& head = pair.second;

        if (head == nullptr) {
            head = new Node();
        } else {
            Node* curr = head;
            while (curr->next != nullptr) {
                curr = curr->next;
            }
            curr->next = new Node();
        }
    }
}


template <typename T>
void LinkedTable<T>::AddColumn(const std::string& col_desc) {
    col_descs.push_back(col_desc);
    for(auto& pair : rows_) {
        Node*& head = pair.second;
        if(head==nullptr) {
            head = new Node();
        }
        else {
            Node* curr = head;
            while(curr -> next !=nullptr) {
                curr = curr -> next;
            }
            curr -> next = new Node();

        }
    }
}

template <typename T>
void LinkedTable<T>::AddColumn(const std::string& col_desc) {
   col_descs.push_back(col_desc);
   for(auto& pair : rows_) {
        Node*& head = pair.second;
        if(head==nullptr) {
            head = new Node();
        }
        else {
            Node* curr = head;
            while(curr -> next!=nullptr) {
                curr = curr -> next;
            }
            curr ->next = new Node();
        }

   }

}
template <typename T>
void LinkedTable<T>::AddColumn(const std::string& col_desc) {
    col_descs.push_back(col_desc);
    for(auto& pair : rows_) {
        Node*& head = pair.second;
        if(head==nullptr) {
            head = new Node();
        }
        else {
            Node* curr = head;
            while(curr ->next != nullptr) {
                curr = curr ->next;
            }
            curr ->next = new Node();
        }
    }
}






template <typename T>
void LinkedTable<T>::AddRow(const std::string& label,
                           const std::vector<T>& values) {
    if (rows_.count(label)) {
        throw std::invalid_argument("Row already exists");
    }

    if (values.size() != col_descs_.size()) {
        throw std::invalid_argument("Incorrect number of values");
    }

    Node* head = nullptr;

    if (!values.empty()) {
        head = new Node(values[0]);
        Node* curr = head;

        for (std::size_t i = 1; i < values.size(); ++i) {
            curr->next = new Node(values[i]);
            curr = curr->next;
        }
    }

    rows_[label] = head;
}

template <typename T>
void LinkedTable<T>::AddRow(const std::string& label, const std::vector<T>& values) {
    if(rows_.count(label)){
        throw std::invalid_argument("bad row");
    }
    if(values.size() != col_descs.size()) {
        throw std:: invalid_argument("bad num");

    }
    Node* head = nullptr;
    if(!values.empty()) {
        head = new Node(values[0]);
        Node* curr = head;
        for(std::size_t i = 1; i<values.size(); ++i) {
            curr->next = new Node(values[i]);
            curr = curr->next;
        }
    }
    rows_[label] = head;


}


template <typename T>
void LinkedTable<T>::AddRow(const std::string& label, const std::vector<T>& values) {
    if(rows_.count(label)) {
        throw
    }
    if(values.size()!= col_descs.size()) {
        throw
    }
    Node* head = nullptr;
    if(!values.empty()) {
        head = new Node(values[0]);
        Node* curr = head;
        for(size_t i = 1; i<values.size(); i++){
            curr -> next = new Node(values[i]);
            curr = curr ->next;
        }

    }
    rows_[label] = head;
}


















template <typename T>
void LinkedTable<T>::AddRow(const std::string& label, const std::vector<T>& values) {
    if(rows_.count(label)){
        throw std::invalid_argument("bad row");
    }
    if(values.size()!= col_descs.size()) {
        throw std::invalid_argument("bad size");
    }

    Node* head = nullptr;
    if(!values.empty()){
        head = new Node(values[0]);
        Node* curr = head;
        for(size_t i = 1; i<values.size(); ++i) {
            curr-> next = new Node(values[i]);
            curr = curr -> next
        }
    }
    rows_[label] = head;

}

template <typename T>
void LinkedTable<T>::AddRow(const std::string& label, const std::vector<T>& values) {
    if(rows_.count(label)) {
        throw std::invalid_argument("bad row");
    }
    if(values.size()!=col_descs.size()){
        throw std::invalid_argument("bad number");
    }
    Node* head = nullptr;
    if(!value.empty()) {
        head = new Node(value[0]);
        Node* curr = head;
        for(size_t i = 1; i<values.size(); ++i){
            curr ->next = new Node(value[i]);
            curr = curr ->next;
        }
    }
    rows_[label] = head;
}


template <typename T>
void LinkedTable<T>::DeleteRow(const std::string& label) {
    auto it = rows_.find(label);
    if (it == rows_.end()) {
        return;
    }

    Node* curr = it->second;
    while (curr != nullptr) {
        Node* next = curr->next;
        delete curr;
        curr = next;
    }

    rows_.erase(it);
}


template <typename T> 
void LinkedTable<T>::DeleteRow(const std::string& label) {
    auto it = rows_.find(label);
    if(it == rows_.end()) {
        return;
    }
    Node* curr = it -> second;
    while(curr != nullptr) {
        Node* next = curr -> next;
        delete curr;
        curr = next;
    }
    rows_.erase(it);
}



template <typename T> 
void LinkedTable<T>::DeleteRow(const std::string& label) {
    auto it = rows_.find(label);
    if(it == rows_.end()){
        return;
    }
    Node* curr = it ->second;
    while(curr != nullptr) {
        Node* next = curr -> next;
        delete curr;
        curr = next;
    }
    rows_.erase(it);
}