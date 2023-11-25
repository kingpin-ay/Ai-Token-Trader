from blockchain.Block import BlockChain , Transaction 
from fastapi import Body, FastAPI
from pydantic import BaseModel

app = FastAPI()

test_chain = BlockChain()


# all post classes
class Transaction_Data(BaseModel):
    data: str






@app.get('/test')
def testapi():
    return {"status" : "ping_pong"}


# blockchain specific

@app.get('/')
async def chain():
    return {"blockChain" : test_chain}

@app.get('/get/transaction_pool')
async def getTransactionPool():
    return {"transactionPool": test_chain.transaction_pool}

@app.get('/get/blocksList')
async def getBlockList():
    return {"blocks": test_chain.blockChain}

@app.post('/set/transaction')
async def setTransactionToPool(transaction : Transaction_Data = Body()):
    newTransaction = Transaction(transaction.data)
    test_chain.add_transaction_to_the_pool(newTransaction)

@app.get('/mine_a_block')
async def mineABlock():
    isBlockCreationPossible = test_chain.block_creation()
    if(isBlockCreationPossible):
        block_status = test_chain.mine_block()
        return block_status
    else : return {"blockCreated" : isBlockCreationPossible , "message": "not enough transaction"}
