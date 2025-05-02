class Property extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'title', 'description', 'type', 'price', 'address', 'expiration_date', 'is_active'
    ];

    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
