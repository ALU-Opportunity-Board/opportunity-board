"""empty message

Revision ID: f9fd1d162748
Revises: 
Create Date: 2023-04-21 15:44:28.094089

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f9fd1d162748'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.String(length=200), nullable=False),
    sa.Column('first_name', sa.String(length=50), nullable=True),
    sa.Column('last_name', sa.String(length=50), nullable=True),
    sa.Column('email', sa.String(length=50), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('role', sa.String(length=50), nullable=True),
    sa.Column('picture', sa.String(length=100), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('opportunities',
    sa.Column('id', sa.String(length=200), nullable=False),
    sa.Column('user_id', sa.String(length=200), nullable=False),
    sa.Column('title', sa.String(length=100), nullable=False),
    sa.Column('company', sa.String(length=100), nullable=False),
    sa.Column('opportunity_type', sa.String(length=100), nullable=False),
    sa.Column('field', sa.String(length=100), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('deadline', sa.DateTime(), nullable=False),
    sa.Column('link', sa.String(length=400), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('opportunities')
    op.drop_table('users')
    # ### end Alembic commands ###
