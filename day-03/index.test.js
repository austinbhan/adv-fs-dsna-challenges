const { BinaryTreeNode } = require('./BinaryTreeNode');
// const PersonTreeNode = require('./PersonTreeNode');

describe('node based data structures', () => {
  it('example test', () => {
    expect(1).toBe(1);
  });
  it('creates a new tree?', () => {
    const B = new BinaryTreeNode('B');
    const A = new BinaryTreeNode('A');
    const C = new BinaryTreeNode('C');
    const D = new BinaryTreeNode('D');
    const Z = new BinaryTreeNode('Z');
  
    B.add(A);
    B.add(C);
    B.add(Z);
    B.add(D);
    expect(B.value).toEqual('B');
    expect(B.left.value).toEqual('A');
    expect(B.right.value).toEqual('C');
    expect(B.right.right.value).toEqual('Z');
  });
}
);
