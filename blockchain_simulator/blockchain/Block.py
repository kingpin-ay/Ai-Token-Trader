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



class BlockChain : 
    def __init__(self) -> None:
        self.block_size = 5
        self.block_chain_difficulty = 4
        genosis_block = Block(block_number=0 , encrypted_transaction_data = [{"transaction": "Genosis block" , "hash_validator" : "6f06c52ef9291d6ec126794910178feaa9d4c07ecf38a7410c656a3526d28272"}], block_size=self.block_size , previous_block_hash="0000" , difficulty=self.block_chain_difficulty)
        genosis_block.calculate_nonce()
        self.blockChain = [genosis_block]
        self.transaction_pool = []
        self.next_block = None
        self.minimum_trasaction_for_one_block = 2
        
        
    def block_creation(self):
        if(len(self.transaction_pool) < self.minimum_trasaction_for_one_block) : return None

        self.next_block = Block(block_number=len(self.blockChain) , encrypted_transaction_data=self.transaction_pool[:self.minimum_trasaction_for_one_block] , block_size=self.block_size , previous_block_hash=self.blockChain[-1].get_block_hash() , difficulty=self.block_chain_difficulty)
        
        self.transaction_pool = self.transaction_pool[self.minimum_trasaction_for_one_block:]

        return self.next_block
    
    def mine_block(self):
        if(self.next_block == None) : return
        self.next_block.calculate_nonce()
        self.blockChain.append(self.next_block)
        self.next_block = None

    def validate_blockChain (self) :
        pass

    def add_transaction_to_thePull (self , transaction):
        self.transaction_pool.append(transaction)

    def __str__ (self):
        return f"right now the blockChain : {self.blockChain}"



# for testing purposes
if __name__ == "__main__" :
    block1 = Block(block_number=0 , encrypted_transaction_data = ["hello" , "ayush" , "how" , "are" , "you"], block_size=10 , previous_block_hash="0000" , difficulty=4)
    block_hash , nonce  = block1.calculate_nonce()
    print(f"block hash -> {block_hash}")
    print(f"block nonce -> {nonce}")
    print(block1)


    # testing for blockchain class
    blockchain = BlockChain()
    transaction = {"transaction": "this is a testing block1" , "hash_validator": "testing hash"}
    blockchain.add_transaction_to_thePull(transaction)
    blockchain.add_transaction_to_thePull(transaction)
    blockchain.block_creation()
    blockchain.mine_block()
    print(blockchain)