class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'property_id', 'client_id', 'status', 'mode_paiement'
    ];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }

    public function client()
    {
        return $this->belongsTo(User::class, 'client_id');
    }
}
