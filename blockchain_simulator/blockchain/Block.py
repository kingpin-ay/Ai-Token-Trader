import time
import hashlib


class Block : 

    def __init__(self , block_number , encrypted_transaction_data , block_size, previous_block_hash , difficulty) -> None:
        self.block_number : int = block_number
        self.encrypted_transaction_data : [] = encrypted_transaction_data
        self.mined_timestamp : int = 0
        self.previous_block_hash: str = previous_block_hash
        self.__version = {1:{
            "last_block": block_number - 1,
            "merkel_root": self.hash_calculator(str(encrypted_transaction_data)),
            "creation_time": self.timestamp(),
            "nonce" : 0,
            "difficulty" : difficulty,
        }}
        self.header = {"version" : self.__version[1]}
        #this is a predefied number passed by blockchain it self (eg. 1 means  1 transaction)
        self.block_size : int = block_size  
        self.transaction_counter : int = len(encrypted_transaction_data)
        self.nonce: int = 0
        self.__block_hash : str = ''
        self.block_mine_difficulty = difficulty
        self.full_block = {}

    def get_block_hash (self): 
        return self.__block_hash
    
    def set_block_hash(self , hashData):
        if(type(hashData)  == 'str'):
            self.__block_hash = hashData
            return True
        else: 
            return False
    
    def generate_block_data (self , nonceValue):
        self.mined_timestamp = self.timestamp(),
        block_data = {
            "block_header" : self.header,
            "block_number" : self.block_number,
            "timestamp" : self.mined_timestamp,
            "previous_block_hash" : self.previous_block_hash,
            "nonce" : nonceValue,
            "transaction_list" : self.encrypted_transaction_data,
            "transaction_count" : self.transaction_counter,
            "mine_difficulty" : self.block_mine_difficulty,
        }
        self.full_block = block_data
        return block_data

    def calculate_nonce (self):
        nonceCount = 0
        while(True):
            self.__block_hash = self.hash_calculator(self.generate_block_data(nonceValue=nonceCount))
            if(self.__block_hash.startswith("0"*self.block_mine_difficulty)): 
                break
            nonceCount += 1
        self.__version[1]["nonce"] = nonceCount
        self.header["version"] = self.__version[1]
        return self.__block_hash , nonceCount
    
    def timestamp (self) : 
        return int (time.time())

    def hash_calculator (self ,data):
        hash_obj = hashlib.sha256()
        hash_obj.update(str(data).encode())
        hex_dig = hash_obj.hexdigest()
        return hex_dig

    def __str__(self) -> str:
        return f"Block__{self.block_number} : {self.full_block}"



# for testing purposes
if __name__ == "__main__" :
    block1 = Block(block_number=0 , encrypted_transaction_data = ["hello" , "ayush" , "how" , "are" , "you"], block_size=10 , previous_block_hash="0000" , difficulty=4)
    block_hash , nonce  = block1.calculate_nonce()
    print(f"block hash -> {block_hash}")
    print(f"block nonce -> {nonce}")
    print(block1)